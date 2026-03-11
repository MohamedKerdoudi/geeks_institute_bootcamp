
const API_KEY = 'YOUR_API_KEY';


const BASE = `https://v6.exchangerate-api.com/v6/${API_KEY}`;
const SUPPORTED_CODES_URL = `${BASE}/codes`;

const els = {
  from: document.getElementById('from'),
  to: document.getElementById('to'),
  amount: document.getElementById('amount'),
  convertBtn: document.getElementById('convertBtn'),
  clearBtn: document.getElementById('clearBtn'),
  switchBtn: document.getElementById('switchBtn'),
  result: document.getElementById('result'),
  error: document.getElementById('error'),
};

function showError(message) {
  els.error.textContent = message;
  els.error.hidden = false;
}
function clearError() {
  els.error.hidden = true;
  els.error.textContent = '';
}


async function loadCodes() {
  try {
    const res = await fetch(SUPPORTED_CODES_URL);
    if (!res.ok) throw new Error(`Failed to fetch supported codes (${res.status})`);
    const data = await res.json();
    if (data.result !== 'success') throw new Error('API returned an error fetching codes');

    const options = data.supported_codes
      .map(([code, name]) => ({ code, name }))
      .sort((a, b) => a.code.localeCompare(b.code));

    const makeOpt = ({ code, name }) =>
      `<option value="${code}">${code} — ${name}</option>`;

    els.from.innerHTML = options.map(makeOpt).join('');
    els.to.innerHTML = options.map(makeOpt).join('');


    setSelected(els.from, 'USD');
    setSelected(els.to, 'EUR');

  } catch (err) {
    showError(err.message);
  }
}

function setSelected(selectEl, value) {
  const idx = Array.from(selectEl.options).findIndex(o => o.value === value);
  selectEl.selectedIndex = idx >= 0 ? idx : 0;
}


async function convert() {
  clearError();
  const base = els.from.value;
  const target = els.to.value;
  const amount = parseFloat(els.amount.value || '0');

  if (!base || !target) return showError('Please select both currencies.');
  if (!(amount >= 0)) return showError('Please enter a valid non-negative amount.');

  if (base === target) {
    els.result.classList.remove('muted');
    els.result.textContent = `${formatNumber(amount)} ${target}`;
    return;
  }

  els.result.classList.add('muted');
  els.result.textContent = 'Converting…';

  try {
    const url = `${BASE}/pair/${encodeURIComponent(base)}/${encodeURIComponent(target)}/${encodeURIComponent(amount)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Conversion failed (${res.status})`);
    const data = await res.json();
    if (data.result !== 'success') throw new Error('API returned an error for conversion');

    const { conversion_result, conversion_rate, time_last_update_utc } = data;

    els.result.classList.remove('muted');
    els.result.innerHTML = `
      <div style="font-size:1.25rem;font-weight:700;">
        ${formatNumber(amount)} ${base} = ${formatNumber(conversion_result)} ${target}
      </div>
      <div style="margin-top:.35rem;font-size:.95rem;opacity:.85;">
        Rate: 1 ${base} = ${formatNumber(conversion_rate)} ${target}
        • Updated: ${time_last_update_utc ?? 'n/a'}
      </div>
    `;
  } catch (err) {
    showError(err.message);
    els.result.textContent = '—';
  }
}

function swapCurrencies() {
  const a = els.from.value;
  els.from.value = els.to.value;
  els.to.value = a;
  convert();
}

function clearAll() {
  els.amount.value = '1';
  clearError();
  els.result.classList.add('muted');
  els.result.textContent = 'Choose currencies and amount, then press Convert.';
}

function formatNumber(n) {
  return Number(n).toLocaleString(undefined, { maximumFractionDigits: 6 });
}


els.convertBtn.addEventListener('click', convert);
els.clearBtn.addEventListener('click', clearAll);
els.switchBtn.addEventListener('click', swapCurrencies);
els.amount.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') convert();
});


loadCodes();
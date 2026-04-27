class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)

    def show_call_history(self):
        print("Call History:")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)

    def show_outgoing_messages(self):
        print("Outgoing Messages:")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(msg)

    def show_incoming_messages(self):
        print("Incoming Messages:")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(msg)

    def show_messages_from(self, number):
        print(f"Messages from {number}:")
        for msg in self.messages:
            if msg["from"] == number:
                print(msg)
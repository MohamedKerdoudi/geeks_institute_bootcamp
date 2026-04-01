import { Router } from 'express';
var router = Router();

router.get('/', function(req, res, ) {

  res.json([
    { id: 1, username: "somebody" },
    { id: 2, username: "somebody_else" }
  ]);

});

export default router;
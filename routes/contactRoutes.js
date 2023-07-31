const express = require("express");
const router = express.Router();

//importing from controllers
const {getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);    
    // below routes are set in common routes: /, /:id
router.route("/").get( getContacts ).post(createContact); 
router.route("/:id").get(getContact ).put( updateContact).delete(deleteContact);



module.exports = router;
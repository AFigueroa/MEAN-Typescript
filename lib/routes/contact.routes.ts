import { Router, Request, Response, NextFunction } from 'express';
import { ContactController } from '../controllers/contact.controller';

const contactController: ContactController = new ContactController() ;
const router: Router = Router();

router.route('/')
    .get((req: Request, res: Response, next: NextFunction) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
            res.status(401).send('You shall not pass!');
        } else {
            next();
        }
    }, contactController.getContacts)

    // POST endpoint
    .post(contactController.addNewContact);

router.route('/:contactId')
    // get specific contact
    .get(contactController.getContactWithID)
    .put(contactController.updateContact)
    .delete(contactController.deleteContact);

export const ContactRouter: Router = router;

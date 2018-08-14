import { Router, Request, Response, NextFunction } from 'express';
import { HeroesController } from '../controllers/heroes.controller';

const heroesController: HeroesController = new HeroesController() ;
const router: Router = Router();

router.route('/')
    // GET endpoint
    .get(heroesController.getHeroes)
    // POST endpoint
    .post(heroesController.addNewHero);

router.route('/:heroesId')
    // get specific heroes
    .get(heroesController.getHeroById)
    .put(heroesController.updateHero)
    .delete(heroesController.deleteHero);

export const HeroesRouter: Router = router;

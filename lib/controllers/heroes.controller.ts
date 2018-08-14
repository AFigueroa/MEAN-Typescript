import * as mongoose from 'mongoose';
import { HeroSchema } from '../models/hero.schema';
import { Request, Response } from 'express';

const Hero = mongoose.model('Heroes', HeroSchema);

export class HeroesController {

    public addNewHero (req: Request, res: Response) {
        const newHero = new Hero(req.body);

        newHero.save((err, hero) => {
            if (err) {
                res.send(err);
            }
            res.json(hero);
        });
    }

    public getHeroes (req: Request, res: Response) {
        Hero.find({}, (err, heroes) => {
            if (err) {
                res.send(err);
            }
            res.json(heroes);
        });
    }

    public getHeroById (req: Request, res: Response) {
        Hero.findById(req.params.heroId, (err, hero) => {
            if (err) {
                res.send(err);
            }
            res.json(hero);
        });
    }

    public updateHero (req: Request, res: Response) {
        Hero.findOneAndUpdate({ _id: req.params.heroesId }, req.body, { new: true }, (err, hero) => {
            if (err) {
                res.send(err);
            }
            res.json(hero);
        });
    }

    public deleteHero (req: Request, res: Response) {
        Hero.remove({ _id: req.params.heroesId }, (err, hero) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted hero!'});
        });
    }
}

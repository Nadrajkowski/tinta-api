import {Request, Response, NextFunction} from 'express';

class DummyAuth {

    public auth = (req: Request, res: Response, next: NextFunction) => {
        if (req.headers.authorization !== 'lul') {
            res
                .status(401)
                .send('Not authorized');
        } else {
            next();
        }

    }
}

export default new DummyAuth();
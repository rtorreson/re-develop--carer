import { MongooseModule } from '@nestjs/mongoose';
import { Any } from 'src/constants/app';

/**
 * X use mongoose connect
 * @param x
 * @param y
 * @returns
 */

export const useMongooseConnect = (x: Any, y: Any) => {
  return MongooseModule.forFeature([{ name: x.name, schema: y }]);
};

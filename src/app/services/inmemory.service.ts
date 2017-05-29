import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Holop } from '../holop';

export class InMemoryService implements InMemoryDbService {

  createDb() {
    let holops: Holop[] = [{
      id: 1,
      name: 'Johnny',
      master: 'Mr. Aaron',
      rentFrom: '2015/10/15',
      rentTo: '2018/10/16'
    },
    {
      id: 2,
      name: 'Sam',
      master: 'Mr. Smith',
      rentFrom: '2014/10/18',
      rentTo: '2019/06/05'
    }];

    return { holops };
  }
}

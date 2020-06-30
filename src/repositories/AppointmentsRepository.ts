import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class TransactionsRepository extends Repository<Appointment> {
  public findByDate(date: Date): Appointment | null {
    return null;
  }
}

export default TransactionsRepository;

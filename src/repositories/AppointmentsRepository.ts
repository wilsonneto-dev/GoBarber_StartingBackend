import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class TransactionsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const appointment = await this.findOne({
      where: { date },
    });
    return appointment ?? null;
  }
}

export default TransactionsRepository;

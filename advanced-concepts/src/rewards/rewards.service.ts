import { Injectable } from '@nestjs/common';

@Injectable()
export class RewardsService {
  granTo() {
    console.log('Hello from the lazy-loaded RewardsService!');
  }
}

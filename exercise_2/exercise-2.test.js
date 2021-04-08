const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 2', () => {
  afterAll(() => pool.end());

  it('find all rental dates for customers with the first_name Patricia', async () => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-2.sql`, 'utf-8'));
    expect(rows).toEqual([
      { rental_date: new Date('2005-05-27T07:09:24.000Z') },
      { rental_date: new Date('2005-06-18T03:54:58.000Z') },
      { rental_date: new Date('2005-07-10T13:31:24.000Z') },
      { rental_date: new Date('2005-07-10T19:38:56.000Z') },
      { rental_date: new Date('2005-07-27T21:30:42.000Z') },
      { rental_date: new Date('2005-07-27T22:23:02.000Z') },
      { rental_date: new Date('2005-07-28T01:40:20.000Z') },
      { rental_date: new Date('2005-07-29T07:12:59.000Z') },
      { rental_date: new Date('2005-07-29T19:56:59.000Z') },
      { rental_date: new Date('2005-07-30T00:14:29.000Z') },
      { rental_date: new Date('2005-07-30T13:06:10.000Z') },
      { rental_date: new Date('2005-07-30T20:47:43.000Z') },
      { rental_date: new Date('2005-07-30T21:14:11.000Z') },
      { rental_date: new Date('2005-07-30T23:21:13.000Z') },
      { rental_date: new Date('2005-07-31T05:39:53.000Z') },
      { rental_date: new Date('2005-08-01T04:58:56.000Z') },
      { rental_date: new Date('2005-08-01T16:45:26.000Z') },
      { rental_date: new Date('2005-08-02T09:10:56.000Z') },
      { rental_date: new Date('2005-08-02T14:41:41.000Z') },
      { rental_date: new Date('2005-08-02T17:43:48.000Z') },
      { rental_date: new Date('2005-08-02T20:44:53.000Z') },
      { rental_date: new Date('2005-08-17T10:52:18.000Z') },
      { rental_date: new Date('2005-08-19T13:26:04.000Z') },
      { rental_date: new Date('2005-08-21T20:24:32.000Z') },
      { rental_date: new Date('2005-08-22T05:41:56.000Z') },
      { rental_date: new Date('2005-08-22T20:53:04.000Z') },
      { rental_date: new Date('2005-08-24T00:39:35.000Z') }
    ]);
  });
});

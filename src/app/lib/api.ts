'use server';

import db from "./db";

export const createItem = async (title: string) => {
  return new Promise<number>((resolve, reject) => {
    db.serialize(() => {
      db.run(
        `
            INSERT INTO items (title) VALUES ($title)
        `,
        {
          $title: title
        },
        function (err) {
          if (err) {
            reject(err);
          }
          resolve(this.lastID);
        }
      )
    })
  });
};
'use client';

import { createItem } from "../lib/api";

export const CreateItemInput = () => {
  return (
    <div>
      <input type="text" 
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const value = e.currentTarget.value;
            createItem(value).then(() => {
              console.debug("Item created");
            }).catch((err: Error) => {
              console.error("Failed to create item", err);
            });
          }
        }}
      />
    </div>
  );
};
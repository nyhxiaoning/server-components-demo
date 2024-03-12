/*
 * @Author: ningyongheng ningyongheng@jeejio.com
 * @Date: 2024-03-11 14:04:51
 * @LastEditors: ningyongheng ningyongheng@jeejio.com
 * @LastEditTime: 2024-03-12 10:55:21
 * @FilePath: /server-components-demo/src/NoteList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import SidebarNote from './SidebarNote';
import {db} from './db';

async function ensureNoteExists() {
    const notes = await db.query(`select * from notes where title = 'notes'`);

    if (notes.rows.length === 0) {
      // 如果不存在名为 'notes' 的笔记，则创建一条记录
      await db.query(
        `insert into notes (title, content) values ('notes', 'Your default note content')`
      );
    }
  }

  
export default async function NoteList({searchText}) {
  // const notes = await (await fetch('http://localhost:4000/notes')).json();

  // WARNING: This is for demo purposes only.
  // We don't encourage this in real apps. There are far safer ways to access
  // data in a real application!
  const notes = (
    await db.query(
      `select * from notes where title ilike $1 order by id desc`,
      ['%' + searchText + '%']
    )
  ).rows;

  // Now let's see how the Suspense boundary above lets us not block on this.
  // await fetch('http://localhost:4000/sleep/3000');

  return notes.length > 0 ? (
    <ul className="notes-list">
      {notes.map((note) => (
        <li key={note.id}>
          <SidebarNote note={note} />
        </li>
      ))}
    </ul>
  ) : (
    <div className="notes-empty">
      {searchText
        ? `Couldn't find any notes titled "${searchText}".`
        : 'No notes created yet!'}{' '}
    </div>
  );
}

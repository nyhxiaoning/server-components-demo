/*
 * @Author: ningyongheng ningyongheng@jeejio.com
 * @Date: 2024-03-11 14:04:51
 * @LastEditors: ningyongheng ningyongheng@jeejio.com
 * @LastEditTime: 2024-03-12 13:31:08
 * @FilePath: /server-components-demo/credentials.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  host: process.env.DB_HOST || 'localhost',
  database: 'notesapi',
  user: 'henryning',
  password: 'password',
  port: '5432',
};

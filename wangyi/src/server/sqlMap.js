//sqlMap.js sql语句
const sqlMap ={
    user: {
        add:'insert into people(username,password,age,sex,name,phone,email,nameimg) values (?,?,?,?,?,?,?,?)',
        select:'select * from people',
        del:'delete from people where username = ? ',
        update:'update people set username = ? ,password = ?, age = ?, sex = ?, name = ?, phone =?, email =?, nameimg =? where username = ?',
    }
}

module.exports = sqlMap
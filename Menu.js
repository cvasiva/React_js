import React from 'react';


function Menu() {
    const data = [
        { name: "Anom", age: 19, gender: "Male", phone: "5645" },
        { name: "Megha", age: 19, gender: "Female", phone: "5649" },
        { name: "Subham", age: 25, gender: "Male", phone: "5640" },
        { name: "Subham", age: 25, gender: "Male", phone: "5640" },
        { name: "Subham", age: 25, gender: "Male", phone: "5640" },
        { name: "Subham", age: 25, gender: "Male", phone: "5640" },
        { name: "Subham", age: 25, gender: "Male", phone: "5640" },

    ]
    return (
        <>
            <div class="shadow p-3 mb-5 bg-body rounded">
                <h1 className='text-dark'>siva</h1>
                <table class="table" style={{ border: '2px solid blue', width: '800px' }}>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.phone}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Menu
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

function About() {
    const data = [
        { name: 'Page 1', uv: 100, pv: 2400, amt: 2400 },
        { name: 'Page 2', uv: 200, pv: 2400, amt: 2400 },
        { name: 'Page 3', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Page 4', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page 5', uv: 500, pv: 2400, amt: 2400 },
        { name: 'Page 6', uv: 600, pv: 2400, amt: 2400 },
        { name: 'Page 7', uv: 700, pv: 2400, amt: 2400 },];
        

    return (
        <>
            <div class="shadow p-3 mb-5 bg-body rounded">
                siva
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </>
    )
}
export default About
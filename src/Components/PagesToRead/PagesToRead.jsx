import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getRead } from '../Utility/localstorageRead';


const PagesToRead = () => {
    const allbook = useLoaderData();

    const getread = getRead();
    const [showbooks, setShowBooks] = useState([]);
    useEffect(() => {
        const showdata = [];
        for (const id of getread) {
            const exist = allbook.find(data => data.bookId == id);
            if (exist) {
                showdata.push(exist);
            }

            setShowBooks(showdata);
        }
    }, [allbook]);
    
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
      
    return (
        <div className='flex justify-center mt-10'>
            <BarChart
                width={1280}
                height={500}
                data={showbooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" className='text-sm text-wrap'/>
                <YAxis />
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {showbooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
           
        </div>
    );
};

export default PagesToRead;
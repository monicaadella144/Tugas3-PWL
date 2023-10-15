import { useEffect, useState } from "react";
import axios from "axios"
import { Table, Image, Container } from 'react-bootstrap';

export default function Api() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
                );
                setData(response.data.meals);

            } catch (error) {
                console.error(error);
            }
        }
        fetch();
    }, []);

    console.log(Data)



    return (
        <Container>
            <h2>Recomendation Meal</h2>
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        <th>Meal</th>
                        <th>Instructions</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((news, index) => (
                        <tr key={index}>
                            <td>
                                {news.strMeal}
                            </td>
                            <td>
                                {news.strInstructions}
                            </td>
                            <td>
                                <Image width="200px" height="200px" src={news.strMealThumb} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
import * as React from "react";
import { useTable } from "react-table";
import { useContext } from "react";
import { UserContext } from "../hooks/UserContext"


export const LogRegistry = () => {

    const loggedUsername = useContext(UserContext).username
    const [data, setData] = React.useState([])

    const fetchLogData= async() => {
        const response = await fetch (`http://localhost:8585/games/getLogsByUsername/${loggedUsername}`)
        const data = await response.json()
        setData(data)
        return 
    };

    React.useEffect(() => {
        fetchLogData()
    }, [])

    return (
        <div>
            <h1>Logs for {loggedUsername}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Event</th>
                    
                        <th>Date and Hour</th>
                    </tr>
                </thead>
                <tbody>
            {
            data.map(log => {
                return(<tr>
                    <td>{log.event}</td>

                    <td>{log.date}</td>
                    </tr>)
            })
            }
                </tbody>
            </table>
        </div>
    
    )
}
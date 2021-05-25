import { useEffect, useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import { getCricketMatches } from '../service/cricket-api';
import Score from './Score';
function TabComponent() {

    //making a state
    const [value, setValue] = useState(0);
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        getCricketMatches().then(data => {
            setMatches(data.matches);
            console.log(data.matches);
        }).catch(error => console.log(error));
    }, []);

    const handleChange = (e, value) => {
        setValue(value);
    }

    function TabPanel(props) {
        return (
            <Box>
                {props.value === props.index && (
                    <Box>
                        <Typography>{props.children}</Typography>
                    </Box>
                )}
            </Box>
        )
    }

    function getData(type) {
        return (
            matches.map(match => {
                return (
                    <>
                        {match.type === type ?
                            <Box alignItems="center" display="flex" justifyContent="center">
                                <Score match={match} key={match.unique_id} />
                            </Box>
                            : ""}
                    </>
                )
            })
        )
    }
    return (
        <>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary">
                <Tab label="One Day" />
                <Tab label="Twenty20" />
                <Tab label="Test" />
            </Tabs>

            {/* we are passing props when we are rendering the component */}

            <TabPanel index={0} value={value} >
                {getData("")}
            </TabPanel>
            <TabPanel index={1} value={value} >
                {getData("Twenty20")}
            </TabPanel>
            <TabPanel index={2} value={value} >
                {getData("Tests")}
            </TabPanel>

        </>
    )
}

export default TabComponent;
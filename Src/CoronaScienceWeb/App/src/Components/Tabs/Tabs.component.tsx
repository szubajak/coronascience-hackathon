import React from 'react'
import { AppBar, Tab, Tabs } from '@material-ui/core'
import { StyledBox } from './Tabs.styles'
import { ObservationsComponent } from '~Aggregator'

export const TabsComponent: React.FC = () => {
    const [selectedTab, setSelectedTab] = React.useState(0)

    const handleChange = (
        event: React.ChangeEvent<{}>,
        index: number
    ): void => {
        setSelectedTab(index)
    }

    const getTabContent = (): JSX.Element => {
        if (selectedTab === 0) {
            return <ObservationsComponent />
        }

        return <div>No content yet!</div>
    }

    return (
        <StyledBox>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Observation" />
                    <Tab label="TAB NAME 1" />
                    <Tab label="TAB NAME 2" />
                </Tabs>
            </AppBar>
            {getTabContent()}
        </StyledBox>
    )
}

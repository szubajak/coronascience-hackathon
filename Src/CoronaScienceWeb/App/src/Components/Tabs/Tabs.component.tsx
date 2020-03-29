import React from 'react'
import { Tab, Tabs } from '@material-ui/core'
import { StyledBox, StyledAppBar } from './Tabs.styles'
import { ObservationsComponent, OverviewComponent } from '~Aggregator'

export const TabsComponent: React.FC = () => {
    const [selectedTab, setSelectedTab] = React.useState(0)

    const handleChange = (
        event: React.ChangeEvent<{}>,
        index: number
    ): void => {
        setSelectedTab(index)
    }

    const getTabContent = (): JSX.Element => {
        switch (selectedTab) {
            case 0:
                return <OverviewComponent />
            case 2:
                return <ObservationsComponent />
            default:
                return <React.Fragment />
        }
    }

    return (
        <StyledBox>
            <StyledAppBar position="fixed">
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Overview" />
                    <Tab label="Plots" />
                    <Tab label="Observations" />
                </Tabs>
            </StyledAppBar>
            {getTabContent()}
        </StyledBox>
    )
}

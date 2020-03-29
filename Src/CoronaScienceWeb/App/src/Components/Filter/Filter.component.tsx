import React from 'react'
import { StyledBox } from './Filter.styles'
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    Slider,
} from '@material-ui/core'

export const FilterComponent: React.FunctionComponent = () => {
    const [value, setValue] = React.useState('female')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((event.target as HTMLInputElement).value)
    }

    return (
        <StyledBox>
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                    />
                    <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                    />
                    <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                    />
                </RadioGroup>
                <FormLabel component="legend">Age</FormLabel>
                <Slider
                    defaultValue={30}
                    aria-labelledby="range-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={100}
                />
                <FormLabel component="legend">Is in risk group?</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                    />
                    <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                    />
                </RadioGroup>
            </FormControl>
        </StyledBox>
    )
}

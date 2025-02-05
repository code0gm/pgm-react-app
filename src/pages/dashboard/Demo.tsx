import React from 'react'
import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ko } from 'date-fns/locale'

function Demo() {
  const today = new Date()
  const [date, setDate] = React.useState<Date | null>(today)
  const [inputValue, setInputValue] = React.useState('')
  const [comboValue, setComboValue] = React.useState('')
  const [numberValue, setNumberValue] = React.useState<number | ''>('')
  const [radioValue, setRadioValue] = React.useState('option1')
  const [startDate, setStartDate] = React.useState<Date | null>(today)
  const [endDate, setEndDate] = React.useState<Date | null>(today)
  const [checkboxValue, setCheckboxValue] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value)
  }

  const handleStartDateChange = (newValue: Date | null) => {
    if (endDate && newValue && newValue > endDate) {
      setError('시작 날짜는 종료 날짜보다 이후일 수 없습니다.')
    } else {
      setError(null)
      setStartDate(newValue)
    }
  }

  const handleEndDateChange = (newValue: Date | null) => {
    if (startDate && newValue && newValue < startDate) {
      setError('종료 날짜는 시작 날짜보다 이전일 수 없습니다.')
    } else {
      setError(null)
      setEndDate(newValue)
    }
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(event.target.checked)
  }

  const handleSubmit = () => {
    const formData = {
      date,
      comboValue,
      numberValue,
      radioValue,
      startDate: startDate ? startDate.toISOString().split('T')[0] : null,
      endDate: endDate ? endDate.toISOString().split('T')[0] : null,
      checkboxValue,
    }
    console.log(JSON.stringify(formData, null, 2))
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        데모 페이지
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <Box sx={{ flex: '1 1 100%', maxWidth: '100%', mb: 2 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                카드 제목
              </Typography>
              <Typography variant="body2" color="text.secondary">
                이곳은 카드 내용입니다. Material-UI의 Card 컴포넌트를 사용하여
                내용을 표시할 수 있습니다.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{ flex: '1 1 100%', maxWidth: '100%', display: 'flex', gap: 2 }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            저장
          </Button>
          <Button variant="outlined" color="secondary">
            취소
          </Button>
          <Button variant="text" color="secondary">
            취소2
          </Button>
        </Box>
        <Box sx={{ flex: '1 1 100%', maxWidth: '100%', mb: 2 }}>
          <TextField
            fullWidth
            label="입력 필드"
            variant="outlined"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </Box>
        <Box sx={{ flex: '1 1 100%', maxWidth: '100%', mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkboxValue}
                onChange={handleCheckboxChange}
              />
            }
            label="체크박스"
          />
        </Box>
        <Box sx={{ flex: '1 1 100%', maxWidth: '100%', mb: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
            <DatePicker
              label="달력"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                },
              }}
            />
          </LocalizationProvider>
        </Box>
        <Box
          sx={{
            flex: '1 1 100%',
            maxWidth: '100%',
            mb: 2,
            display: 'flex',
            gap: 2,
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
            <DatePicker
              label="시작 날짜"
              value={startDate}
              onChange={handleStartDateChange}
              slotProps={{
                textField: {
                  fullWidth: true,
                },
              }}
            />
            <DatePicker
              label="종료 날짜"
              value={endDate}
              onChange={handleEndDateChange}
              slotProps={{
                textField: {
                  fullWidth: true,
                  InputProps: {
                    sx: {
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'transparent',
                        },
                        '&.Mui-focused': {
                          boxShadow: 'none',
                        },
                      },
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </Box>
        {error && (
          <Box sx={{ flex: '1 1 100%', maxWidth: '100%', mb: 2 }}>
            <Typography color="error">{error}</Typography>
          </Box>
        )}
        <Box sx={{ flex: '1 1 100%', maxWidth: '100%', mb: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="combo-label">콤보박스</InputLabel>
            <Select
              labelId="combo-label"
              value={comboValue}
              label="콤보박스"
              onChange={(event) => setComboValue(event.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Option 1</MenuItem>
              <MenuItem value={20}>Option 2</MenuItem>
              <MenuItem value={30}>Option 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flex: '1 1 100%', maxWidth: '100%', mb: 2 }}>
          <TextField
            fullWidth
            label="숫자 입력"
            type="number"
            value={numberValue}
            onChange={(event) => setNumberValue(Number(event.target.value))}
            variant="outlined"
          />
        </Box>
        <Box sx={{ flex: '1 1 100%', maxWidth: '100%', mb: 2 }}>
          <FormControl component="fieldset">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography component="legend">라디오 그룹</Typography>
              <RadioGroup
                row
                aria-label="radio-group"
                name="radio-group"
                value={radioValue}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="옵션 1"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="옵션 2"
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="옵션 3"
                />
              </RadioGroup>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}

export default Demo

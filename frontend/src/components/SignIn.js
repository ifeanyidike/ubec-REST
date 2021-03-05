import React, { useState, useEffect } from 'react'
import { AuthContainer } from '../styles/AuthStyles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import { FormControl, FormHelperText, IconButton, InputAdornment, NativeSelect } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import { schools, studentsAuth } from '../utils/authjson'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockIcon from '@material-ui/icons/Lock';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useDispatch, useSelector } from 'react-redux'
import Message from "../components/Message"
import { useHistory } from 'react-router-dom'
import { loginUser } from '../redux/actions/userActions';
import { loginStudent, loginTeacher } from '../redux/actions/authActions'
import { getSchools } from "../redux/actions/schoolActions"
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'

const SignIn = ({ setLogState }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getSchools())
    }, [dispatch])

    const { schools } = useSelector(state => state.allSchools)

    const [accountType, setAccountType] = useState('student')
    const [studentSchool, setStudentSchool] = useState(schools && schools[0]._id);
    const [teacherSchool, setTeacherSchool] = useState(schools && schools[0]._id);

    const [studentUserName, setStudentUserName] = useState('')
    const [showStudentCode, setShowStudentCode] = useState('')
    const [studentCode, setStudentCode] = useState('')

    const [teacherUserName, setTeacherUserName] = useState('')
    const [showTeacherCode, setShowTeacherCode] = useState('')
    const [teacherCode, setTeacherCode] = useState('')

    const [success, setSuccess] = useState(false)

    const handleStudentLogin = (e) => {
        e.preventDefault()
        dispatch(loginStudent(studentSchool, studentCode))
    }

    const handleTeacherLogin = (e) => {
        e.preventDefault()
        dispatch(loginTeacher(teacherSchool, teacherUserName, teacherCode))
    }

    const teacherLogin = useSelector(state => state.teacherLogin)
    const { error: teacherLoginError,
        loading: teacherLoginLoading,
        teacherInfo } = teacherLogin



    const studentLogin = useSelector(state => state.studentLogin)
    const { error: studentLoginError,
        loading: studentLoginLoading,
        studentInfo } = studentLogin

    useEffect(() => {
        if (studentInfo) {
            history.push('/mainarea')
        }
    }, [history, studentInfo])

    useEffect(() => {
        if (teacherInfo) {
            history.push('/teachermainarea')
        }
    }, [history, teacherInfo])


    return (
        <AuthContainer>
            <h3>Choose account type</h3>
            <div className="cards">
                <div className="cards__item" onClick={() => setAccountType('student')}>
                    <FaUserGraduate className='icon__2x' />
                    <p>Student</p>
                    <CheckCircleIcon style={{ display: accountType === 'student' ? 'block' : 'none' }} />
                </div>
                <div className="cards__item" onClick={() => setAccountType('teacher')}>
                    <FaChalkboardTeacher className="icon__2x" />
                    <p>Teacher</p>
                    <CheckCircleIcon style={{ display: accountType === 'teacher' ? 'block' : 'none' }} />
                </div>
            </div>

            {
                studentLoginError ?
                    <Message variant='error'>{studentLoginError}</Message>
                    :
                    studentLoginLoading ?
                        'loading...'
                        :
                        <form className="authitems students__form"
                            style={{ display: accountType === 'student' ? 'flex' : 'none' }}
                            onSubmit={handleStudentLogin}
                        >
                            <FormControl >
                                <NativeSelect
                                    fullWidth
                                    required
                                    label='School'
                                    className="formcontrol"
                                    value={studentSchool}
                                    onChange={(e) => setStudentSchool(e.target.value)}
                                    inputProps={{ 'aria-label': 'type' }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <HomeIcon />
                                        </InputAdornment>}
                                >
                                    {schools && schools.map((school) => (
                                        <option key={school._id} value={school._id}>
                                            {school.schoolName}
                                        </option>
                                    ))}
                                </NativeSelect>
                                <FormHelperText>Please select your school</FormHelperText>
                            </FormControl>

                            <TextField
                                className='formcontrol'
                                label="Student's code"
                                type={showStudentCode ? 'text' : 'password'}
                                value={studentCode}
                                required
                                onChange={e => setStudentCode(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <VpnKeyIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowStudentCode(!showStudentCode)}
                                                onMouseDown={e => e.preventDefault()}
                                            >
                                                {showStudentCode ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>

                                    ),
                                }}
                                helperText="Please select your student code"
                            />

                            <AwesomeButton
                                type="primary"
                                className='submitbutton'
                            >
                                Submit
                </AwesomeButton>

                        </form>
            }



            {
                teacherLoginError ?
                    <Message variant='error'>{teacherLoginError}</Message>
                    :
                    teacherLoginLoading ?
                        'loading...'
                        :
                        <form className="authitems teachers__form"
                            style={{ display: accountType === 'teacher' ? 'flex' : 'none' }}
                            onSubmit={handleTeacherLogin}
                        >

                            <FormControl >
                                <NativeSelect
                                    fullWidth
                                    required
                                    label='School'
                                    className="formcontrol"
                                    value={teacherSchool}
                                    onChange={(e) => setTeacherSchool(e.target.value)}
                                    inputProps={{ 'aria-label': 'type' }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <HomeIcon />
                                        </InputAdornment>}
                                >
                                    {schools && schools.map((school) => (
                                        <option key={school._id} value={school._id}>
                                            {school.schoolName}
                                        </option>
                                    ))}
                                </NativeSelect>
                                <FormHelperText>Please select your school</FormHelperText>
                            </FormControl>

                            <TextField
                                className='formcontrol'
                                label="Teacher's username"
                                value={teacherUserName}
                                onChange={e => setTeacherUserName(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                helperText="Please enter your username"
                            />

                            <TextField
                                className='formcontrol'
                                label="Teacher's code"
                                type={showTeacherCode ? 'text' : 'password'}
                                value={teacherCode}
                                onChange={e => setTeacherCode(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <VpnKeyIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowTeacherCode(!showTeacherCode)}
                                                onMouseDown={e => e.preventDefault()}
                                            >
                                                {showTeacherCode ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>

                                    ),
                                }}
                                helperText="Please select your teacher code"
                            />


                            <AwesomeButton
                                type="primary"
                                className='submitbutton'
                            >
                                Submit
                </AwesomeButton>
                        </form>
            }
        </AuthContainer>
    )
}

export default SignIn

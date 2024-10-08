import { useState } from 'react';
import AuthForm from '../../components/forms/AuthForm';
import CustomButton from '../../components/forms/CustomButton';
import CustomInput from '../../components/forms/CustomInput';
import './Register.scss';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register data:', formData);
    // Thêm logic xử lý gửi form nếu cần, ví dụ gọi API
  };

  return (
    <div className='container'>
      <div className='todo-app left'>
        <p className='todo-app__title'>Todo App</p>
        <p className='todo-app__subtitle'>Manage your work every day</p>
      </div>
      <div className='register-form right'>
        <AuthForm title='Register' subtitle="Xin Chào nhé!" onSubmit={handleSubmit}>
          <CustomInput
            type='text'
            name='username' // Trùng với key trong formData
            label='Username'
            placeholder='Enter your username'
            value={formData.username} // Giá trị của ô input được gán từ state
            onChange={handleChange} // Hàm handleChange sẽ cập nhật state
            isRequired
          />
          <CustomInput
            type='text'
            name='email' // Trùng với key trong formData
            label='Email'
            placeholder='Enter your email'
            value={formData.email} // Giá trị của ô input được gán từ state
            onChange={handleChange} // Hàm handleChange sẽ cập nhật state
            isRequired
          />
          <CustomInput
            type='password'
            name='password' // Trùng với key trong formData
            label='password'
            placeholder='Enter your password'
            value={formData.password} // Giá trị của ô input được gán từ state
            onChange={handleChange} // Hàm handleChange sẽ cập nhật state
            isRequired
          />

          <CustomButton label='Register' type='submit' />
        </AuthForm>
      </div>
    </div>
  );
}

export default Register;

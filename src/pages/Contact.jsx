import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError(''); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.email === '' || formData.password === '') {
            setError('Email yoki parolni to\'ldiring.');
            return;
        }
        
        if (formData.email !== 'nabinursh123@gmail.com' || formData.password !== 'nabinur2007') {
            setError('Email yoki parol noto\'g\'ri.');
            return;
        }

        localStorage.setItem('userEmail', formData.email);
        localStorage.setItem('userPassword', formData.password);

        // Emailga xabar yuborish
        alert(`Siz imtihonga qabul qilindingiz: ${formData.name}`);
        
        setSuccessMessage(`Siz o'qishga qabul qilindingiz: ${formData.name}`);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Royxatdan otish</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <div>
                <label htmlFor="name">Ism:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Parol:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Royxatdan utish</button>
        </form>
    );
};

export default RegistrationForm;
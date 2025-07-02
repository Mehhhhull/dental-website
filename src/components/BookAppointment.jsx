import React, { useState } from 'react';

const BookAppointment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: 'General Checkup',
  });

  const services = [
    'General Checkup',
    'Teeth Cleaning',
    'Dental Filling',
    'Root Canal',
    'Teeth Whitening',
    'Orthodontic Consultation',
    'Cosmetic Dentistry',
  ];

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  return (
    <div id='book' className='scroll-mt-20 min-h-screen bg-gradient-to-br from-sky-50 to-sky-50 py-12 px-4'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-800 mb-3'>Book Your Perfect Smile</h1>
          <p className='text-lg text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, illo!
          </p>
        </div>

        <div className='mb-12'>
          <div className='relative'>
            {/* Progress Bar Background */}
            <div className='absolute top-1/2 left-0 right-0 h-2 bg-gray-100 rounded-full z-0 transform -translate-y-1/2'>
              <div
                className='absolute top-0 left-0 h-2 bg-gradient-to-r from-sky-400 to-sky-400 rounded-full z-10 transition-all duration-500'
                style={{ width: `${(activeStep - 1) * 50}%` }}
              ></div>
            </div>

            {/* Steps */}
            <div className='flex justify-between relative z-20'>
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className='flex flex-col items-center cursor-pointer'
                  onClick={() => activeStep > step && setActiveStep(step)}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300
                      ${
                        activeStep > step
                          ? 'bg-gradient-to-br from-sky-500 to-sky-500 text-white'
                          : activeStep === step
                          ? 'bg-white text-sky-500 border-2 border-sky-500'
                          : 'bg-gray-300 text-gray-500'
                        }
                    `}
                  >
                    {activeStep > step ? (
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                      </svg>
                    ) : (
                      step
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;

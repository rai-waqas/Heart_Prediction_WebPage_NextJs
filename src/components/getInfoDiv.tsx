'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import predictionData from '../../public/assets/providers/predictionData.json'
interface Props {
  name: string;
  onFormSubmit:(heartDisease: boolean) => void;
}

type FormData = {
  age: number | null;
  sex: number | null;
  cp: number | null;
  trestbps: number | null;
  chol: number | null;
  fbs: number | null;
  restecg: number | null;
  thalach: number | null;
  exang: number | null;
  oldpeak: number | null;
  slope: number | null;
  ca: number | null;
  thal: number | null;
};

type Errors = {
  age?: string;
  sex?: string;
  cp?: string;
  trestbps?: string;
  chol?: string;
  fbs?: string;
  restecg?: string;
  thalach?: string;
  exang?: string;
  oldpeak?: string;
  slope?: string;
  ca?: string;
  thal?: string;
};

const GetInfoDiv: React.FC<Props> = ({ name, onFormSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    age: null,
    sex: null,
    cp: null,
    trestbps: null,
    chol: null,
    fbs: null,
    restecg: null,
    thalach: null,
    exang: null,
    oldpeak: null,
    slope: null,
    ca: null,
    thal: null,
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    let parsedValue: number | null = null;

    if (value.trim() !== '') {
      parsedValue = parseInt(value, 10);
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));

    // Clear validation error for the field being edited
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const validate = () => {
    let newErrors: Errors = {};

    if (formData.age === null || isNaN(formData.age) || formData.age <= 0 || formData.age > 120) {
      newErrors.age = 'Please enter a valid age between 1 and 120.';
    }

    if (formData.sex === null) {
      newErrors.sex = 'Please select your gender.';
    }

    if (formData.cp === null) {
      newErrors.cp = 'Please select chest pain type.';
    }

    if (formData.trestbps === null || isNaN(formData.trestbps) || formData.trestbps <= 0 || formData.trestbps > 300) {
      newErrors.trestbps = 'Please enter a valid resting BP between 1 and 300.';
    }

    if (formData.chol === null || isNaN(formData.chol) || formData.chol <= 0 || formData.chol > 600) {
      newErrors.chol = 'Please enter a valid cholesterol level between 1 and 600.';
    }

    if (formData.fbs === null) {
      newErrors.fbs = 'Please select fasting blood sugar.';
    }

    if (formData.restecg === null) {
      newErrors.restecg = 'Please select resting ECG.';
    }

    if (formData.thalach === null || isNaN(formData.thalach) || formData.thalach <= 0 || formData.thalach > 300) {
      newErrors.thalach = 'Please enter a valid maximum heart rate between 1 and 300.';
    }

    if (formData.exang === null) {
      newErrors.exang = 'Please select exercise-induced angina.';
    }

    if (formData.oldpeak === null || isNaN(formData.oldpeak) || formData.oldpeak < 0 || formData.oldpeak > 10) {
      newErrors.oldpeak = 'Please enter a valid old peak value between 0 and 10.';
    }

    if (formData.slope === null) {
      newErrors.slope = 'Please select slope.';
    }

    if (formData.ca === null || isNaN(formData.ca) || formData.ca < 0 || formData.ca > 3) {
      newErrors.ca = 'Please enter a valid number of major vessels between 0 and 3.';
    }

    if (formData.thal === null) {
      newErrors.thal = 'Please select thalassemia type.';
    }

    console.log('new errors',newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    // Prevent the default form submission behavior.
    e.preventDefault();
  
    // Validate the form data and store any validation errors.
    const validationErrors = validate();
  
    // Check if there are any validation errors.
    if (Object.keys(validationErrors).length > 0) {
      // If there are errors, update the `errors` state with the validation errors.
      setErrors(validationErrors);
      // Since there are validation errors, we stop here and do not proceed with form submission.
      return;
    } else {
      // If there are no errors, clear any existing errors.
      setErrors({});
      console.log('formData',formData);
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( formData ),
      });
      const data = await response.json();
      const prediction = data.prediction;
      console.log('prediction',prediction);
      const heartDisease = prediction === 1 ? true : false;
      onFormSubmit(heartDisease);
      // Submit form data
      // console.log(formData);

      if (formData.age !== null) {
        predictionData.age = formData.age;
      }
      if (formData.sex !== null) {
        predictionData.sex = formData.sex;
      }
      if (formData.cp !== null) {
        predictionData.cp = formData.cp;
      }
      if (formData.trestbps !== null) {
        predictionData.trestbps = formData.trestbps;
      }
      if (formData.chol !== null) {
        predictionData.chol = formData.chol;
      }
      if (formData.fbs !== null) {
        predictionData.fbs = formData.fbs;
      }
      if (formData.restecg !== null) {
        predictionData.restecg = formData.restecg;
      }
      if (formData.thalach !== null) {
        predictionData.thalach = formData.thalach;
      }
      if (formData.exang !== null) {
        predictionData.exang = formData.exang;
      }
      if (formData.oldpeak !== null) {
        predictionData.oldpeak = formData.oldpeak;
      }
      if (formData.slope !== null) {
        predictionData.slope = formData.slope;
      }
      if (formData.ca !== null) {
        predictionData.ca = formData.ca;
      }
      if (formData.thal !== null) {
        predictionData.thal = formData.thal;
      }

      // console.log('predictionData',predictionData);
      // Add your logic here to handle form submission, such as sending the form data to an API.
      // submitFormData(formData);
      // predictionData=formData
    }
  
    // Call the `onFormSubmit` prop function to perform any additional actions after form submission.
    
  };
  
  const isFormValid = Object.values(formData).every((value) => value !== null);

  return (
    <div className="flex flex-col w-full h-auto bg-white p-6 rounded shadow-lg">
      {
        (name!=='') &&
          <h2 className="text-2xl font-semibold mb-4">Hi {name}</h2>
      }
      <p className="mb-6 font-bold text-xl">Please provide the following info:</p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age !== null ? formData.age : ''}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter your age in years (1-120)"
          />
          {errors.age && <span className="text-red-500">{errors.age}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="sex">Gender</label>
          <select
            name="sex"
            value={formData.sex !== null ? formData.sex : ''}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            
          >
            <option value="">Select your Gender</option>
            <option value={1}>Male</option>
            <option value={0}>Female</option>
          </select>
          {errors.sex && <span className="text-red-500">{errors.sex}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="cp">Chest Pain Type</label>
          <select
            name="cp"
            value={formData.cp !== null ? formData.cp : ''}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
           
          >
            <option value="">Select chest pain type</option>
            <option value={0}>Typical Angina</option>
            <option value={1}>Atypical Angina</option>
            <option value={2}>Non-Anginal Pain</option>
            <option value={3}>Asymptomatic</option>
          </select>
          {errors.cp && <span className="text-red-500">{errors.cp}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="trestbps">Resting BP</label>
          <input
            type="number"
            name="trestbps"
            value={formData.trestbps !== null ? formData.trestbps : ''}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter resting BP (1-300)"
          />
          {errors.trestbps && <span className="text-red-500">{errors.trestbps}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="chol">Cholesterol (mg/dL)</label>
          <input
            type="number"
            name="chol"
            value={formData.chol !== null ? formData.chol : ''}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter cholesterol level (1-600)"
          />
          {errors.chol && <span className="text-red-500">{errors.chol}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="fbs">Fasting Blood Sugar</label>
          <div>
            <label className='mr-4'>
              <input
                type="radio"
                name="fbs"
                value={1}
                checked={formData.fbs === 1}
                onChange={handleChange} 
                className='mr-1'
              />
              Greater than 120
            </label>
            <label >
              <input
                type="radio"
                name="fbs"
                value={0}
                checked={formData.fbs === 0}
                onChange={handleChange}
                className='mr-1'
              />
              Less than or equal to 120
            </label>
          </div>
          {errors.fbs && <span className="text-red-500">{errors.fbs}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="restecg">Resting ECG</label>
          <select
            name="restecg"
            value={formData.restecg !== null ? formData.restecg : ''}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            
          >
            <option value="">Select resting ECG</option>
            <option value={0}>Normal</option>
            <option value={1}>ST-T wave abnormality</option>
            <option value={2}>Left ventricular hypertrophy</option>
          </select>
          {errors.restecg && <span className="text-red-500">{errors.restecg}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="thalach">Maximum Heart Rate</label>
          <input
            type="number"
            name="thalach"
            value={formData.thalach !== null ? formData.thalach : ''}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter maximum heart rate (1-300)"
          />
          {errors.thalach && <span className="text-red-500">{errors.thalach}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="exang">Exercise Induced Angina</label>
          <div>
            <label className='mr-4'>
              <input
                type="radio"
                name="exang"
                value={1}
                checked={formData.exang === 1}
                onChange={handleChange}
                className='mr-1'
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="exang"
                value={0}
                checked={formData.exang === 0}
                onChange={handleChange}
                className='mr-1'
              />
              No
            </label>
          </div>
          {errors.exang && <span className="text-red-500">{errors.exang}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="oldpeak">Old Peak</label>
          <input
            type="number"
            name="oldpeak"
            value={formData.oldpeak !== null ? formData.oldpeak : ''}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter old peak value (0-10)"
          />
          {errors.oldpeak && <span className="text-red-500">{errors.oldpeak}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="slope">Slope</label>
          <select
            name="slope"
            value={formData.slope !== null ? formData.slope : ''}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
           
          >
            <option value="">Select slope</option>
            <option value={0}>Upsloping</option>
            <option value={1}>Flat</option>
            <option value={2}>Downsloping</option>
          </select>
          {errors.slope && <span className="text-red-500">{errors.slope}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="ca">Number of Major Vessels</label>
          <input
            type="number"
            name="ca"
            value={formData.ca !== null ? formData.ca : ''}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter number of major vessels (0-3)"
          />
          {errors.ca && <span className="text-red-500">{errors.ca}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-semibold text-base mb-1" htmlFor="thal">Thalassemia Type</label>
          <select
            name="thal"
            value={formData.thal !== null ? formData.thal : ''}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            
          >
            <option value="">Select thalassemia type</option>
            <option value={1}>Normal</option>
            <option value={2}>Fixed defect</option>
            <option value={3}>Reversible defect</option>
          </select>
          {errors.thal && <span className="text-red-500">{errors.thal}</span>}
        </div>
       <div className="flex flex-col items-end">
       <button type="submit" className={`bg-blue-500 text-white p-2 rounded ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!isFormValid}>
            Submit
          </button>
       </div>
      </form>
    </div>
  );
};

export default GetInfoDiv;
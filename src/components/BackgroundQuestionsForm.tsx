import React, { useState } from 'react';
import { usePersonalization } from '../auth-personalization/context/PersonalizationContext';
import { PersonalizationPreference } from '../auth-personalization/types';
import { useNavigate } from 'react-router-dom';

const programmingLanguages = [
  'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Go', 'Rust', 'Ruby', 'PHP'
];
const operatingSystems = [
  'Windows', 'macOS', 'Linux', 'Android', 'iOS', 'FreeRTOS', 'VxWorks'
];
const hardwareTypes = [
  'Robotics', 'IoT Devices', 'Embedded Systems', 'Microcontrollers', 'FPGAs', 'Drones', 'Sensors'
];

const BackgroundQuestionsForm: React.FC = () => {
  const { savePreferences, loading } = usePersonalization();
  const navigate = useNavigate();

  const [selectedSoftware, setSelectedSoftware] = useState<string[]>([]);
  const [selectedHardware, setSelectedHardware] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSoftwareChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions).map(option => option.value);
    setSelectedSoftware(options);
  };

  const handleHardwareChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions).map(option => option.value);
    setSelectedHardware(options);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (selectedSoftware.length === 0 && selectedHardware.length === 0) {
      setError('Please select at least one software or hardware background.');
      return;
    }

    const preferences: PersonalizationPreference = {
      softwareBackground: selectedSoftware,
      hardwareBackground: selectedHardware,
    };

    try {
      await savePreferences(preferences);
      navigate('/'); // Navigate to homepage or personalized dashboard
    } catch (err) {
      setError('Failed to save preferences. Please try again.');
      console.error('Error saving personalization preferences:', err);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
      <h2>Tell Us About Your Background</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="software" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Software Background (Select all that apply):
          </label>
          <select
            id="software"
            multiple
            value={selectedSoftware}
            onChange={handleSoftwareChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '120px' }}
          >
            {programmingLanguages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
            {operatingSystems.map(os => (
              <option key={os} value={os}>{os}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="hardware" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Hardware Background (Select all that apply):
          </label>
          <select
            id="hardware"
            multiple
            value={selectedHardware}
            onChange={handleHardwareChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '120px' }}
          >
            {hardwareTypes.map(hw => (
              <option key={hw} value={hw}>{hw}</option>
            ))}
          </select>
        </div>

        {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? 'Saving...' : 'Save Preferences'}
        </button>
      </form>
    </div>
  );
};

export default BackgroundQuestionsForm;

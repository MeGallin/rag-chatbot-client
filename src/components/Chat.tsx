import React, { useState } from 'react';
import axios from 'axios';

const Chat: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:4000/chat', { query });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error sending query:', error);
      setResponse('An error occurred while fetching the response.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>RAG Chatbot</h1>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask something..."
        rows={4}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleSend} disabled={loading}>
        {loading ? 'Loading...' : 'Send'}
      </button>
      {response && (
        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            border: '1px solid #ccc',
          }}
        >
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Chat;

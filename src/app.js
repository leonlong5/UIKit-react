

import Box from './box/Box';
import Button from './button/Button';
import Alert from './alert/Alert';

export default function App() {
  return (
    <div className="App">
      <Box>
        <Button>Button, Click me</Button>
        <Alert>Alert message</Alert>
      </Box>
    </div>
  );
};
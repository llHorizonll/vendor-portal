import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MyForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        defaultValue=""
        rules={{ required: 'Username is required' }}
        render={({ field }) => (
          <TextField
            label="Username"
            variant="outlined"
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: 'Password is required' }}
        render={({ field }) => (
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            {...field}
          />
        )}
      />

      <Button type="submit" variant="contained" disabled={Object.keys(errors).length > 0}>
        Submit
      </Button>
    </form>
  );
}

export default MyForm;
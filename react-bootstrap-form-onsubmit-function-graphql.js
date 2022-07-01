//  React Boostrap Form onSubmit function



const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      return setValidated(true);
    }

    addHospital({
      variables: {
        input: {
          hospitalName,
        },
      },
      refetchQueries: [
        { query: GET_ALL_ACTIVE_HOSPITALS },
        'GetAllActiveHospitals',
      ],
      onCompleted: () => {
        setFormData(resetFormData);
      },
    });
  };

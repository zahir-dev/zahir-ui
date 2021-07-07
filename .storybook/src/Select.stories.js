import React from "react";

import Select from 'zahir-ui/Select';

export default {
    component: Select,
    title: 'Components/Phone',
};


export const basic = () => (
    <Select 
      options={[
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ]}
    />
)
import React from 'react';

const Step_3 = (props) => {
    const { setCurrentStep,  currentStep, result, setResult} = props;
    const nextStep = (e) => {
        setCurrentStep(currentStep + 1);
        console.log(e.target.dataset.value);
        setResult({
            ...result,
            output: [...result.output, e.target.dataset.value === "true"]
        });
    }
    return (
        <div className="Step_3 text-center">
            <h1>আপনার কি জ্বর আছে বা জ্বরজ্বর অনুভব করছেন?</h1>
            <button onClick={nextStep} className="btn btn-primary mr-1" data-value="false">না</button>
            <button onClick={nextStep} className="btn btn-primary" data-value="true">হ্যাঁ</button>
        </div>
    )
}

export default Step_3;
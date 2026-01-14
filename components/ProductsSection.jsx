import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiX } from 'react-icons/fi';

const products = {
  CardioPlus: [
    {
      "name": "Cadivot - 10/20",
      "category": "Cardiology",
      "image": "/product1.jpg",
      "description": "Rosuvastatin 10mg/20mg Tablets",
      "about": `Cadivot 10mg/20mg Tablet is a statin used to reduce bad cholesterol (LDL) and triglyceride levels, thereby lowering the risk of heart attack and stroke. It works by blocking liver enzymes, reducing cholesterol production, and increasing its breakdown in the blood. It is effective when lifestyle changes alone are insufficient in managing high cholesterol.

This medicine is part of a comprehensive treatment plan that should include a healthy low-fat diet, regular exercise, smoking cessation, and weight reduction. It is important to regularly check your lipid profile while taking Cadivot 10mg/20mg. Before starting this medicine, inform your doctor if you have kidney problems, are pregnant or breastfeeding, have diabetes, lung disease, or musculoskeletal disorders. Avoid combining it with immune system-suppressing or anti-HIV medications.`,
      "uses": `\n-Cadivot 10mg/20mg Tablet is used in the treatment of Hyperlipidemia (high cholesterol), Prevention of heart attack, and Prevention of stroke.`,
      "benefits": `Cadivot 10mg/20mg Tablet lowers the risk of cardiovascular disease and coronary events like heart attack, stroke, and heart-related chest pain (angina). Cadivot 10mg/20mg Tablet is beneficial in patients who are at high risk of these events. It is also prescribed in children (aged eight years or more) suffering from familial hypercholesterolemia (a genetic disease resulting in high cholesterol) along with lipid-lowering pills and other dietary measures. Cadivot 10mg/20mg Tablet plays a vital role in slowing atherosclerosis progress (blocked artery walls of the heart due to fat/lipid deposition leading to heart attack and stroke) in adult patients.`,
      "sideEffects": `\n- Myalgia (muscle pain)
\n- Asthenia (lack of energy)
\n- Nausea
\n- Headache
\n- Abdominal pain
\n- Muscle pain
\n- Weakness
\n- Daytime drowsiness`
    },
    {
      "name": "Cadivot - F",
      "category": "Cardiology",
      "image": "/product2.jpg",
      "description": "Rosuvastatin 10mg + Fenofibrate 160mg Tablets",
      "about": `Cadivot-F Tablet is used to lower elevated cholesterol and triglyceride levels, reducing the risk of cardiovascular events like heart attack, stroke, and angina. It contains Rosuvastatin (statin) and Fenofibrate (fibric acid derivative). Rosuvastatin lowers “bad” cholesterol (LDL) and triglycerides while increasing “good” cholesterol (HDL), while Fenofibrate specifically lowers triglyceride levels.

Take Cadivot-F Tablet with or without food, swallowing it whole with water. Follow your doctor’s instructions on dosage. Possible side effects include nausea, headache, abdominal pain, muscle pain, weakness, and daytime drowsiness, which usually resolve over time but should be reported to your doctor if persistent.

Regular cholesterol and triglyceride monitoring is important. In addition to taking this medicine, maintain a low-fat diet, exercise regularly, quit smoking, limit alcohol, and manage your weight. Avoid high-fat foods. Inform your doctor if you have kidney issues, are pregnant or breastfeeding, or have diabetes.`,
      "uses": `Treatment of Hypertriglyceridemia, Hypercholesterolemia, and Mixed dyslipidaemia.`,
      "benefits": `Cadivot-F Tablet is beneficial for patients with Hypertriglyceridemia (high triglyceride levels), Hypercholesterolemia (high cholesterol levels), and Mixed Dyslipidemia (elevated triglycerides – TG, low-density lipoprotein – LDL, and low high-density lipoprotein – HDL). Rosuvastatin first increases LDL (bad cholesterol) uptake and breakdown in liver cells. It then inhibits the synthesis of very low-density lipoprotein (VLDL) in the liver to reduce total bad cholesterol levels (LDL and VLDL). Fenofibrate works by increasing the enzyme that breaks down fats or lipids in the blood and also helps lower elevated uric acid levels by increasing its excretion through urine. Additionally, it is prescribed to diabetic patients with elevated lipid and cholesterol levels to reduce cardiovascular risks like heart attack, stroke, and angina.`,
      "sideEffects": `\n- Nausea
\n- Headache
\n- Abdominal pain
\n- Muscle pain (myalgia)
\n- General weakness
\n- Daytime drowsiness`
    },
    {
      "name": "Cadivot Gold - 10/20",
      "category": "Cardiology",
      "image": "/product3.jpg",
      "description": "Rosuvastatin 10mg/20mg + Aspirin 75mg + Clopidogrel 75mg Capsules",
      "about": `Cadivot Gold 10mg/20mg Capsule is used to treat heart attack, myocardial infarction, angina, and stroke. It contains a combination of Rosuvastatin, Clopidogrel, and Aspirin. Rosuvastatin helps lower bad cholesterol and improve good cholesterol, while Clopidogrel and Aspirin prevent blood clots, reducing the risk of cardiovascular events.

It is typically taken once daily after food, as prescribed by your doctor. Possible side effects include headache, muscle pain, increased bleeding, stomach pain, indigestion, bruising, gastrointestinal bleeding, diarrhea, and nausea. Most side effects do not require medical attention and resolve on their own, but consult your doctor if bleeding persists.

Before taking Cadivot Gold 10mg/20mg, inform your doctor if you have asthma, liver or kidney problems, ulcers, or if you are pregnant or breastfeeding. Do not stop the medication without consulting your doctor, as it may worsen your condition.`,
      "uses": `\n-Treatment of Heart attack, myocardial infarction (blockage of the blood to muscles of the heart), angina (chest pain) and stroke.`,
      "benefits": `Cadivot Gold 10mg/20mg Capsule belongs to a group of antihyperlipidemic and antiplatelets used to treat heart attack, myocardial infarction (blockage of the blood to muscles of the heart), angina (chest pain), and stroke. Cadivot Gold 10mg/20mg Capsule is a fixed-dose combination composed of three medicines: Rosuvastatin, Clopidogrel, and Aspirin. Rosuvastatin belongs to a group of drugs known as antihyperlipidemic. Rosuvastatin lowers the level of lipids. It blocks the ability of the body to produce bad cholesterol and improves the ability of the body to produce good cholesterol. It is used to lower cholesterol levels and treat heart and blood-related problems, heart attacks, and strokes. Clopidogrel and Aspirin both belong to a group of drugs known as Antiplatelet. They work by preventing the blood from sticking together and decreasing the production of clots which is harmful to the body. It is used to treat chest pain and heart attack.`,
      "sideEffects": `\n- Headache
\n- Muscle pain
\n- Increased tendency of bleeding
\n- Stomach pain
\n- Indigestion
\n- Bruise (discolouration of the skin)
\n- Bleeding in the nose
\n- Weakness
\n- Gastrointestinal bleeding
\n- Diarrhoea
\n- Nausea`
    },
    {
      "name": "Cadivot CV - 10/20",
      "category": "Cardiology",
      "image": "/product4.jpg",
      "description": "Rosuvastatin 10mg/20mg + Clopidogrel 75mg Capsules",
      "about": `Cadivot CV 10mg/20mg Capsule is used to prevent heart attack and stroke by lowering elevated cholesterol and triglyceride levels. A heart attack occurs when coronary arteries become blocked due to plaque build-up, leading to atherosclerosis.

Cadivot CV 10mg/20mg Capsule contains Rosuvastatin and Clopidogrel. Rosuvastatin lowers bad cholesterol (LDL), triglycerides, and increases good cholesterol (HDL). Clopidogrel is a blood thinner that prevents clot formation. Together, they reduce the risk of heart attack, stroke, and chest pain (angina).

Take as directed by your doctor. Common side effects may include headaches, ankle swelling (oedema), slow heart rate, and nausea. Dizziness may occur, so avoid driving. If side effects persist, consult your doctor.

Do not stop taking this medication abruptly, as it may worsen your condition. Inform your doctor if you have liver disease, bleeding issues, or muscle problems. Cadivot CV 10mg/20mg should not be used by pregnant or breastfeeding women.`,
      "uses": `\n-Treatment of Hyperlipidemia (Increased cholesterol), Prevention of heart attack, Prevention of stroke.`,
      "benefits": `Rosuvastatin is a lipid-lowering medication that blocks the enzyme required to make cholesterol in the body. As a result, it lowers the bad cholesterol (low-density lipoproteins or LDL) and triglycerides (TG) and increases the levels of good cholesterol (high-density lipoproteins or HDL). Clopidogrel is a blood thinner (anticoagulant) that collectively prevents a clot in the blood vessels. Together, Cadivot CV 10mg/20mg Capsule reduces the increased levels of bad cholesterol (low-density lipoprotein and triglycerides) and prevents blood clots, thereby reducing the risk of heart attack, stroke, and heart-related chest pain (angina).`,
      "sideEffects": `\n- Stomach bleeding
\n- Gastrointestinal bleeding
\n- Nose bleeding
\n- Rash
\n- Diarrhoea
\n- Stomach ulcer
\n- Muscle disease (myopathy, rhabdomyolysis)
\n- Abdominal pain`
    },
    {
      "name": "Empresta 90",
      "category": "Cardiology",
      "image": "/product5.jpg",
      "description": "Ticagrelor 90mg Tablets",
      "about": `Empresta 90mg Tablet is an antiplatelet (blood thinner) used to prevent heart attack or stroke in people at high risk of heart disease. It helps prevent blood clots in those with acute coronary syndrome or who have had stents placed in coronary arteries. A heart attack happens when a blood clot blocks the flow of oxygen to the heart, often caused by cholesterol and fat buildup in the arteries. Symptoms of a heart attack include chest pain, upper body pain, sweating, nausea, fatigue, and trouble breathing.

Empresta 90mg Tablet contains Ticagrelor, which slows the clotting action of blood by making platelets less sticky, reducing the risk of heart attack or stroke. Your doctor will guide the dosage based on your medical condition. Side effects may include shortness of breath, chest tightness, blurred vision, nosebleeds, dizziness, or lightheadedness. Consult your doctor if these persist. Empresta 90mg Tablet may increase bleeding risk, so it should not be taken if you have active bleeding, a bleeding brain, or blood flow issues.

Inform your doctor about any allergies or hypersensitivity to medicines or foods before using Empresta 90mg Tablet. Do not stop the medication suddenly, as it could worsen your condition and increase the risk of heart attack. Let your doctor know if you’re scheduled for surgery or taking other medicines. Empresta 90mg Tablet should not be taken before or after heart bypass surgery. Consult your doctor if you’re pregnant, planning to become pregnant, or breastfeeding.`,
      "uses": `\n-Prevention of Heart attack, Stroke, Acute Coronary Syndrome.`,
      "benefits": `Empresta 90mg Tablet is an antiplatelet (blood thinner) and plays a vital role in preventing the formation of harmful blood clots in your blood vessels. Empresta 90mg Tablet works by preventing platelets from sticking together, thereby decreasing the formation of harmful blood clots. Thus, it reduces the risk of heart attack, stroke, and acute coronary syndrome (heart doesn’t receive enough oxygen or blood) in heart disease patients and patients who have undergone recent heart surgery with a stent.`,
      "sideEffects": `\n- Dyspnea (shortness of breath)
\n- Tightness in the chest
\n- Blurred vision
\n- Nosebleeds
\n- Dizziness
\n- Faintness or lightheadedness when getting up suddenly from a lying or sitting position
\n- High level of uric acid in your blood
\n- Severe pain and swelling in your joints – these are signs of gout
\n- Bruising
\n- Headache
\n- Diarrhoea
\n- Indigestion
\n- Constipation
\n- Bleeding after surgery or from cuts (for example, while shaving) and wounds more than is normal
\n- Bleeding from your stomach lining (ulcer)
\n- Bleeding gums`
    }
  ],
  HypertensionX: [
    {
      "name": "Cristel - 40",
      "category": "Cardiology",
      "image": "/product1.jpg",
      "description": "Telmisartan 40mg Tablets",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Cristel - H",
      "category": "Cardiology",
      "image": "/product1.jpg",
      "description": "Telmisartan 40mg + Hydrochlorothiazide 12.5mg Tablets",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Cristel - LN",
      "category": "Cardiology",
      "image": "/product1.jpg",
      "description": "Telmisartan 40mg + Cilnidipine 10mg Tablets",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Bisovert - 2.5",
      "category": "Cardiology",
      "image": "/product1.jpg",
      "description": "Bisoprolol Fumarate 2.5mg Tablets",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Bisovert - 5",
      "category": "Cardiology",
      "image": "/product1.jpg",
      "description": "Bisoprolol Fumarate 5mg Tablets",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    }
  ],
  DiabeticManagement: [
    { name: 'Glimifest M1', category: 'Endocrinology', image: '/product1.jpg', description: 'Glimepride 1mg + Metformin 500mg Tablets', 
      about: `Glimifest M 1mg/500mg Tablet is a combination medicine used to treat type 2 diabetes mellitus in adults. It helps control blood sugar levels by increasing insulin production and improving insulin sensitivity. 

Take it with food, and follow your doctor's instructions carefully. Lifestyle changes like a healthy diet and regular exercise are essential for managing diabetes effectively.

Common side effects include hypoglycemia, nausea, and headache. Consult your doctor if you experience severe side effects or have pre-existing conditions like kidney or liver disease.

This medicine is not suitable for type 1 diabetes or diabetic ketoacidosis. Pregnant or breastfeeding women should consult their doctor before use.`,
      uses: '\n-Treatment of Type 2 diabetes mellitus.',
      benefits: `

Glimifest M 1mg/500mg Tablet is a combination medicine that increases the amount of insulin your body produces (in the pancreas). The insulin then works to lower your blood glucose level. It is usually taken once a day. You should keep taking it for as long as it is prescribed.
\n\nLowering blood glucose levels is an essential part of managing diabetes. If you can control the level you will reduce the risk of getting any of the serious complications of diabetes such as kidney damage, eye damage, nerve problems, and loss of limbs. Taking this medicine regularly along with proper diet and exercise will help you live a normal, healthy life.`,
        sideEffects: 'Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them. \n\n<b>Common side effects of Glimifest M1: \n-Hypoglycemia\n-Hypoglycemia (low blood glucose level)\n-Nausea\n-Diarrhea' },
    { name: 'Glimifest M2', category: 'Endocrinology', image: '/product2.jpg', description: 'Glimepride 2mg + Metformin 500mg Tablets',
      about: `Glimifest-M2 Tablet belongs to a class of anti-diabetic drugs used to treat type 2 diabetes, especially when diet and exercise alone are insufficient. Type 2 diabetes is a chronic condition affecting how the body processes glucose. People with this condition either do not produce enough insulin or develop insulin resistance.

\n\nGlimifest-M2 Tablet is a combination of two antidiabetic drugs: Glimepiride and Metformin. Glimepiride stimulates pancreatic beta cells to produce insulin, which helps remove sugar from the blood. Metformin reduces sugar production in the liver, delays sugar absorption from the intestines, and increases muscle cell sensitivity to insulin, allowing more effective sugar removal from the blood.

\n\nTake Glimifest-M2 Tablet as prescribed by your doctor for the recommended duration based on your condition. Some may experience stomach pain, nausea, diarrhea, vomiting, headache, or a metallic taste. These side effects usually resolve over time but consult a doctor if they persist or worsen.

\n\nInform your doctor if allergic to Glimifest-M2 Tablet or other medications. It is not recommended for children. Avoid breastfeeding while using this medicine as it may pass into breast milk. If pregnant or planning pregnancy, consult your doctor before use. Avoid alcohol as it may increase the risk of lactic acidosis. Drive only if alert after taking the medicine. Take small, frequent meals and avoid prolonged fasting.`,
      uses: `\n-Treatment of Type 2 diabetes mellitus.`,
      benefits: `Glimifest-M2 Tablet contains Glimepiride and Metformin used to treat type 2 diabetes. Glimepiride stimulates cells in the pancreas that produce insulin, which helps remove sugar from the blood. Metformin reduces sugar production by cells in the liver and delays sugar absorption from the intestines. Also, it increases the sensitivity of muscle cells to insulin, which enables these cells to remove sugar more effectively from the blood.`,
      sideEffects: `\n- Stomach pain
\n-Nausea
\n-Diarrhoea
\n-Vomiting
\n- Headache
\n- Metallic taste`
    },
    { name: 'Glimifest MV 1.2', category: 'Endocrinology', image: '/product3.jpg', description: 'Glimepride 1mg + Metformin 500mg + Voglibose 0.2mg Tablets' ,
      about: `Glimifest MV 1.2 Tablet is a combination of anti-diabetic drugs used to treat type 2 diabetes mellitus, a chronic condition affecting glucose processing. High blood sugar levels cause symptoms like frequent urination, increased thirst, and hunger. People with type 2 diabetes either do not produce enough insulin or develop insulin resistance.

\n\nGlimifest MV 1.2 Tablet contains Glimepiride, Metformin, and Voglibose. Glimepiride, a sulfonylurea, increases insulin release from the pancreas. Together, these drugs prevent excessive blood sugar levels, helping to control diabetes.

\n\nTake Glimifest MV 1.2 Tablet with food to avoid stomach upset. Your doctor will determine the duration of use. Common side effects include hypoglycemia (low blood sugar), taste changes, nausea, diarrhea, stomach pain, headache, and upper respiratory symptoms. These usually resolve over time, but consult your doctor if they persist.

\n\nDo not stop taking Glimifest MV 1.2 Tablet without consulting your doctor, as sudden discontinuation may raise blood sugar levels, increasing the risk of retinopathy, nephropathy, and neuropathy. Avoid this medicine if you have type 1 diabetes or severe kidney or liver disease. Inform your doctor if you have heart disease, are pregnant, or are breastfeeding.`,
      uses: `\n-Treatment of Type 2 diabetes mellitus`,
      benefits: `Glimifest MV 1.2 Tablet contains Glimepiride, Metformin, and Voglibose. Glimepiride (a sulfonylurea) increases insulin release from the pancreas. Metformin (a biguanide) lowers glucose production in the liver, delays glucose absorption in the intestines, and improves insulin response. Voglibose (an alpha-glucosidase inhibitor) prevents the breakdown of complex sugars into glucose in the intestine.

\n\nGlimifest MV 1.2 Tablet helps control blood sugar levels and prevents diabetes complications such as kidney damage (diabetic nephropathy), blindness (diabetic retinopathy), and nerve damage (diabetic neuropathy). It also reduces the risk of heart attacks and strokes. As a three-drug combination, it minimizes the need for multiple pills, making medication management easier.`,
      sideEffects: `\n- Hypoglycaemia (low blood glucose level)
\n- Taste change
\n- Nausea
\n- Diarrhoea
\n- Stomach pain
\n- Flatulence
\n- Headache
\n- Upper respiratory symptoms`
    },
    { name: 'Glimifest MV 1.3', category: 'Endocrinology', image: '/product4.jpg', description: 'Glimepride 1mg + Metformin 500mg + Voglibose 0.3mg Tablets',
      about: `Glimifest MV 1.3 Tablet is an anti-diabetic medicine used to treat type 2 diabetes in adults by controlling blood sugar levels.

\n\nTake Glimifest MV 1.3 Tablet with food at the same time daily for maximum benefit. Your doctor will determine the appropriate dose based on your blood sugar levels.

\n\nContinue taking this medicine even if you feel well. Stopping it without consulting your doctor may raise blood sugar levels, increasing the risk of kidney damage, blindness, nerve problems, and limb loss. Along with this medicine, a healthy diet, regular exercise, and weight management are essential for diabetes control.

\n\nThe most common side effect is low blood sugar (hypoglycemia), with symptoms like sweating, dizziness, headache, and shaking. Always carry sugary food or fruit juice to manage it. Avoid alcohol as it increases the risk of hypoglycemia. Other possible side effects include taste changes, nausea, diarrhea, stomach pain, headache, swelling, blurred vision, bone fractures, and upper respiratory infections. Some may experience weight gain.

\n\nDo not take Glimifest MV 1.3 Tablet if you have type 1 diabetes, diabetic ketoacidosis, or severe kidney or liver disease. Inform your doctor if you have a history of heart disease. Pregnant or breastfeeding women should consult their doctor before use. Regular blood sugar monitoring and occasional blood tests may be required.`,
      uses: `\n-Treatment of Type 2 diabetes mellitus`,
      benefits: `
      \n\nGlimifest MV 1.3 Tablet is a medicine that helps control high blood glucose (sugar) levels. It slows down the breakdown of food in the intestine into simple glucose, reducing the rise in blood glucose levels after meals. It also helps eliminate extra glucose from the body through urine. Lowering blood glucose levels is crucial in managing diabetes, reducing the risk of serious complications like kidney damage, eye damage, nerve problems, and limb loss.

\n\nGlimifest MV 1.3 Tablet also reduces the risk of dying from cardiovascular disease in individuals with type 2 diabetes and pre-existing cardiovascular conditions. Taking this medicine regularly, along with a proper diet and exercise, will help you lead a normal, healthy life. Continue using it as prescribed to protect your future health.`,
      sideEffects: `Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them
      \n\n<b>Common side effects of Glimifest MV 1.3
      \n- Nausea \n- Diarrhea \n- Abdominal pain \n- Hypoglycemia (low blood glucose level) \n- Loss of appetite`
    },
    { name: 'Glimifest MV 2.2', category: 'Endocrinology', image: '/product4.jpg', description: 'Glimepride 2mg + Metformin 500mg + Voglibose 0.2mg Tablets',
      about: `\n\nGlimifest MV 2.2 Tablet is a combination of anti-diabetic drugs used to treat type 2 diabetes mellitus, a chronic condition affecting how the body processes glucose. People with type 2 diabetes either do not produce enough insulin, or the insulin produced is ineffective (insulin resistance), leading to high blood glucose levels.

\n\nGlimifest MV 2.2 Tablet contains Glimepiride, Metformin, and Voglibose. Glimepiride increases insulin release from the pancreas, helping control blood glucose levels. Metformin reduces glucose production in the liver and improves the body’s response to insulin. Voglibose delays sugar breakdown in the intestine, preventing spikes in glucose levels after meals.

\n\nTake Glimifest MV 2.2 Tablet with food to avoid stomach upset. Your doctor will decide the appropriate dosage based on your condition. Common side effects may include hypoglycemia (low blood sugar), taste changes, nausea, diarrhea, stomach pain, headache, and upper respiratory symptoms. These usually resolve on their own, but consult your doctor if they persist.

\n\nDo not stop taking Glimifest MV 2.2 Tablet without consulting your doctor, as abrupt discontinuation may increase sugar levels and raise the risk of complications like retinopathy, nephropathy, and neuropathy. It should not be used by those with type 1 diabetes or severe kidney or liver disease. Inform your doctor if you have heart disease, are planning to become pregnant, or are breastfeeding.`,
      uses: `\n-Treatment of Type 2 diabetes mellitus`,
      benefits: `\n\nGlimifest MV 2.2 Tablet contains Glimepiride, Metformin, and Voglibose. Glimepiride, a ‘sulfonylurea’, increases insulin release from the pancreas. Metformin, a ‘biguanide’, reduces glucose production in the liver, delays glucose absorption in the intestines, and enhances the body’s response to insulin. Voglibose, an ‘alpha-glucosidase inhibitor’, prevents the breakdown of complex sugars into simple sugars like glucose in the intestines.

\n\nGlimifest MV 2.2 Tablet helps control blood glucose levels, preventing them from rising too high, thus keeping diabetes under control. It also helps prevent serious complications such as kidney damage (Diabetic Nephropathy), blindness (Diabetic Retinopathy), and loss of sensation in the hands and feet (Diabetic Neuropathy). Additionally, it reduces the risk of heart attack or stroke.

\n\nBeing a combination of three drugs, Glimifest MV 2.2 Tablet reduces the need to take multiple pills, making it easier to manage your medication.`,
      sideEffects: `\n- Hypoglycaemia (low blood glucose level)
\n- Taste change
\n- Nausea
\n- Diarrhoea
\n- Stomach pain
\n- Flatulence
\n- Headache
\n- Upper respiratory symptoms`
    },
    { name: 'Glimifest MV 2.3', category: 'Endocrinology', image: '/product4.jpg', description: 'Glimepride 2mg + Metformin 500mg + Voglibose 0.3mg Tablets',
      about:`
\n\nGlimifest MV 2.3 Tablet is a combination of anti-diabetic drugs used to treat type 2 diabetes mellitus, a chronic condition affecting how the body processes glucose. People with type 2 diabetes either do not produce enough insulin, or the insulin produced is ineffective (insulin resistance), leading to high blood glucose levels.

\n\nGlimifest MV 2.3 Tablet contains Glimepiride, Metformin, and Voglibose. Glimepiride increases insulin release from the pancreas, helping control blood glucose levels. Metformin reduces glucose production in the liver and improves the body’s response to insulin. Voglibose delays sugar breakdown in the intestine, preventing spikes in glucose levels after meals.

\n\nTake Glimifest MV 2.3 Tablet with food to avoid stomach upset. Your doctor will decide the appropriate dosage based on your condition. Common side effects may include hypoglycemia (low blood sugar), taste changes, nausea, diarrhea, stomach pain, headache, and upper respiratory symptoms. These usually resolve on their own, but consult your doctor if they persist.

\n\nDo not stop taking Glimifest MV 2.3 Tablet without consulting your doctor, as abrupt discontinuation may increase sugar levels and raise the risk of complications like retinopathy, nephropathy, and neuropathy. It should not be used by those with type 1 diabetes or severe kidney or liver disease. Inform your doctor if you have heart disease, are planning to become pregnant, or are breastfeeding.`,
      uses:
`\n-Treatment of Type 2 diabetes mellitus`,
benefits:
`\n\nGlimifest MV 2.3 Tablet contains Glimepiride, Metformin, and Voglibose. Glimepiride, a ‘sulfonylurea’, increases insulin release from the pancreas. Metformin, a ‘biguanide’, reduces glucose production in the liver, delays glucose absorption in the intestines, and enhances the body’s response to insulin. Voglibose, an ‘alpha-glucosidase inhibitor’, prevents the breakdown of complex sugars into simple sugars like glucose in the intestines.

\n\nGlimifest MV 2.3 Tablet helps control blood glucose levels, preventing them from rising too high, thus keeping diabetes under control. It also helps prevent serious complications such as kidney damage (Diabetic Nephropathy), blindness (Diabetic Retinopathy), and loss of sensation in the hands and feet (Diabetic Neuropathy). Additionally, it reduces the risk of heart attack or stroke.

\n\nBeing a combination of three drugs, Glimifest MV 2.3 Tablet reduces the need to take multiple pills, making it easier to manage your medication.`,
sideEffects:
`\n- Hypoglycaemia (low blood glucose level)
\n- Taste change
\n- Nausea
\n- Diarrhoea
\n- Stomach pain
\n- Flatulence
\n- Headache
\n- Upper respiratory symptoms`
    },
    { name: 'Provenia', category: 'Endocrinology', image: '/product4.jpg', description: 'Protein Powder' },
    { name: 'Provenia - D', category: 'Endocrinology', image: '/product4.jpg', description: 'Protein Powder for Diabetes' },
    {
      "name": "Sitafest 50",
      "category": "Endocrinology",
      "image": "/product4.jpg",
      "description": "Sitagliptin 50mg Tablets",
      "about": `Sitafest 50 mg Tablet belongs to the group of anti-diabetic medicines called DPP-4 inhibitors (dipeptidyl peptidase-4 inhibitors) used to treat type-2 diabetes mellitus. Type-2 diabetes mellitus is a condition in which blood sugar is too high because the body does not produce or use insulin normally.

Sitafest 50 mg Tablet contains Sitagliptin, which works by blocking the action of DPP-4 (dipeptidyl peptidase-4) and increases the amount of insulin made by the body. Thus, it helps lower blood glucose levels.

In some cases, Sitafest 50 mg Tablet may cause side effects such as upper respiratory tract infections, headache, and nasopharyngitis (inflammation of nasal passages). Most of these side effects may not require medical attention and resolve gradually over time. However, you are advised to consult the doctor if any side effects persist or worsen.

Do not take Sitafest 50 mg Tablet if you are allergic to any of its components. Consult the doctor if you are pregnant or breastfeeding. Sitafest 50 mg Tablet is not recommended in children below 18 years. Keep the doctor informed about your health condition and medications to rule out any unpleasant side effects/interactions.`,
      "uses": `\n-Treatment of type 2 diabetes mellitus`,
      "benefits": `Sitafest 50 mg Tablet contains Sitagliptin, which belongs to the group of anti-diabetic medicines called DPP-4 inhibitors (dipeptidyl peptidase-4 inhibitors). It is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus. Sitafest 50 mg Tablet works by blocking the action of DPP-4 (dipeptidyl peptidase-4) and increasing the amount of insulin made by the body. Thus, it helps lower blood glucose levels.`,
      "sideEffects": `\n- Upper respiratory tract infections
\n- Headache
\n- Nasopharyngitis (inflammation of nasal passages)`
    },
    {
      "name": "Sitafest 100",
      "category": "Endocrinology",
      "image": "/product4.jpg",
      "description": "Sitagliptin 100mg Tablets",
      "about": `Sitafest 100mg Tablet is a medicine used to treat type 2 diabetes mellitus. It is used together with a healthy diet and regular exercise to control blood sugar levels. This helps to prevent serious complications of diabetes like kidney damage and blindness.

Sitafest 100mg Tablet is normally prescribed when diet and exercise alone or other medicines do not prove sufficient to control your blood sugar level. Your doctor may prescribe it alone or along with other diabetes medicines. It may be taken on an empty stomach or with a meal. The dose will depend on your condition and blood sugar levels. Therefore, you should use it as advised by your doctor.

You should take it regularly at the same time each day to get the most benefit, and you should not stop unless your doctor recommends it. This medicine is helping you to control your blood sugar levels and prevent serious complications in the future. It is important to stay on the diet and exercise program recommended by your doctor while taking this medicine. Your lifestyle plays a big part in controlling diabetes.

The most common side effect of taking this medicine is a headache. This is usually minor and improves with time. Low blood sugar level (hypoglycemia) is a possible side effect if you are also taking other diabetes medicines like insulin or sulfonylurea, so you need to know how to recognize and deal with it. It may also cause upper respiratory tract infections like sore throat, cough, and cold. Contact your doctor if the side effects worry you or if they do not go away.

Before taking this medicine, let your doctor know if you have ever had kidney disease, heart or pancreas problems, or if you drink a lot of alcohol. Pregnant or breastfeeding women should also consult their doctor before taking it. Some other medicines you are taking may interfere with this medicine’s working. So, make sure your doctor knows about all the other medicines you are using. Limit your alcohol intake while taking this medicine because it can increase your risk of developing low blood sugar levels. You may need regular tests such as kidney function and blood glucose levels to check that the medicine is working properly.`,
      "uses": `\n-Type 2 diabetes mellitus`,
      "benefits": `Sitafest 100 mg Tablet contains Sitagliptin, which belongs to the group of anti-diabetic medicines called DPP-4 inhibitors (dipeptidyl peptidase-4 inhibitors). It is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus. Sitafest 100 mg Tablet works by blocking the action of DPP-4 (dipeptidyl peptidase-4) and increasing the amount of insulin made by the body. Thus, it helps lower blood glucose levels.`,
      "sideEffects": `Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them
      \n\n<b>Common side effects of Sitafest 100mg
      \n- Nasopharyngitis (inflammation of the throat and nasal passages)\n- Headache\n- Hypoglycemia (low blood glucose level)`
    },
    {
      "name": "Sitafest M 50/500",
      "category": "Endocrinology",
      "image": "/product4.jpg",
      "description": "Sitagliptin 50mg + Metformin 500mg Tablets",
      "about": `Sitafest M 50/500 Tablet is an anti-diabetic combination of Sitagliptin and Metformin used to treat type 2 diabetes. It helps control blood sugar by increasing insulin production and improving sugar utilization. Metformin reduces sugar release from the liver and absorption in the stomach.

Take Sitafest M 50/500 Tablet with food to avoid stomach upset, and at the same time each day. The dose will be adjusted by your doctor. The most common side effect is hypoglycemia (low blood glucose), so be cautious and carry sugar with you. Other side effects include taste changes, nausea, diarrhea, stomach pain, headache, and upper respiratory symptoms.

Do not stop taking the tablet without consulting your doctor, as it may cause your blood sugar levels to rise, increasing the risk of complications like retinopathy, nephropathy, and neuropathy. Avoid if you have type 1 diabetes, severe kidney, or liver disease. Inform your doctor if you have heart disease, are planning to get pregnant, or are breastfeeding.`,
      "uses": `\n-Treatment of Type 2 Diabetes Mellitus`,
      "benefits": `Sitafest M 50/500 Tablet helps the pancreas produce more insulin, effectively utilize insulin, and decrease the excess sugar produced by the liver. It helps control the rise in blood sugar levels after meals. Additionally, it does not cause weight gain with prolonged use. Sitafest M 50/500 Tablet plays a vital role in managing blood sugar levels and preventing serious complications of diabetes, such as eyesight loss (retinopathy), kidney damage (nephropathy), nerve damage (neuropathy), diabetic foot ulcers, and delayed wound healing.`,
      "sideEffects": `\n- Low blood sugar
\n- Runny nose
\n- Sore throat
\n- Upper lung infection
\n- Diarrhoea
\n- Nausea
\n- Vomiting
\n- Gas
\n- Stomach upset
\n- Indigestion
\n- General weakness
\n- Headache`
    },
    {
      "name": "Sitafest D 100/10",
      "category": "Endocrinology",
      "image": "/product4.jpg",
      "description": "Sitagliptin 100mg + Dapagliflozin 10mg Tablets",
      "about": `Sitafest D 100/10 Tablet is used to treat type-2 diabetes mellitus, a condition where blood glucose levels are elevated due to insulin deficiency or resistance. It contains Dapagliflozin (a sodium-glucose cotransporter-2 inhibitor) and Sitagliptin (a dipeptidyl peptidase-4 inhibitor). Dapagliflozin lowers blood glucose by increasing its excretion through urine, while Sitagliptin raises insulin levels and reduces glucose production by the liver, helping control blood sugar levels.

Sitafest D 100/10 Tablet may cause side effects like diarrhoea, hypoglycaemia, headache, nausea, and vomiting. These typically resolve over time but consult your doctor if they persist.

Avoid using Sitafest D 100/10 Tablet if you’re allergic to any of its ingredients. Consult your doctor if you’re pregnant, breastfeeding, or taking other medications to avoid any interactions.
`,
      "uses": `\n-Treatment of Type-2 diabetes mellitus`,
      "benefits": `Sitafest D 100/10 Tablet is a combination medicine containing Dapagliflozin and Linagliptin as active ingredients. Dapagliflozin helps in removing excess sugar from the body via urine. Linagliptin works by decreasing the hormones that raise blood glucose levels and increasing insulin release from the pancreas. Together, Sitafest D 100/10 Tablet helps control blood sugar levels.`,
      "sideEffects": `\n- Stomach upset
\n- Hypoglycaemia (low blood sugar levels)
\n- Nausea
\n- Vomiting
\n- Diarrhea
\n- Headache
\n- Constipation
\n- Dizziness
\n- Runny nose
\n- Sore throat`
    }
  ],
  GynoHealth: [
    {
      "name": "Calberry XT",
      "category": "Gynecology",
      "image": "/product1.jpg",
      "description": "Calcium Carbonate 1250mg + Elemental Calcium 500mg + Vitamin D3 2000IU + Methylcobalamin 1500mcg + L-Methifolate Calcium 1mg + Pyridoxine 5 + phosphate 20mg",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Provenia Mom",
      "category": "Gynecology",
      "image": "/product2.jpg",
      "description": "Protein Powder for Pregnancy & Lactation",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    }
  ],
  UroCare: [
    {
      "name": "Flavolace",
      "category": "Urology",
      "image": "/product1.jpg",
      "description": "Flavoxate Hydrochloride 200mg Tablets",
      "about": `Flavolace 200mg Tablet is an anti-spasmodic medication used to treat urinary tract muscle spasms caused by bladder, prostate, or urethra inflammation. It also helps relieve symptoms after surgery, cystoscopy, or catheterization, such as painful urination, excessive nighttime urination, and urinary incontinence.

Flavolace 200mg contains Flavoxate, which relaxes the bladder muscles, helping prevent frequent or uncontrolled urination and relieving associated pain.

Take Flavolace 200mg as prescribed by your doctor. Common side effects may include nausea, vomiting, stomach upset, gastric pain, dry mouth, and drowsiness. Most of these side effects do not require medical attention but consult your doctor if they persist.

Consult your doctor before taking Flavolace 200mg if pregnant or breastfeeding, and avoid driving if you experience drowsiness, vertigo, or blurred vision. Flavolace 200mg is not recommended for children under 12. Avoid alcohol while taking this medication. It may contain lactose, so avoid it if you have lactose intolerance.`,
      "uses": `\n-Treatment of Urinary tract spasm`,
      "benefits": `Flavolace 200mg Tablet belongs to a group of medicines called ‘Antispasmodics’ used to relieve and prevent muscle spasms. Flavolace 200mg Tablet contains ‘Flavoxate’ which works by inhibiting bladder contractions in the urinary tract, thereby reducing the associated pain. Flavolace 200mg Tablet is used to treat urinary tract muscle spasms caused due to the inflammation of the urinary bladder, prostate gland or urethra. Besides this, Flavolace 200mg Tablet also relieves symptoms that arise after surgery, cystoscopy, or catheterization like dysuria (painful urination), nocturia (excessive urination at night), and the inability to control urine flow (urinary incontinence).`,
      "sideEffects": `\n- Nausea
\n- Vomiting
\n- Stomach upset
\n- Gastric pain
\n- Dry mouth
\n- Drowsiness
`
    }
  ],
  OTCwellness: [
    {
      "name": "Aceworth P",
      "category": "OTC",
      "image": "/otc1.jpg",
      "description": "Aceclofenac 100mg + Paracetamol 325mg Tablets",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Aceworth SP",
      "category": "OTC",
      "image": "/otc2.jpg",
      "description": "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg Tablets",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Aceworth MR",
      "category": "OTC",
      "image": "/otc3.jpg",
      "description": "Aceclofenac 100mg + Paracetamol 325mg + Chlorzoxazone 250mg Tablets",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Ascolite",
      "category": "OTC",
      "image": "/otc4.jpg",
      "description": "Terbutaline Sulphate 1.25mg + Ambroxyl HCL 15mg + Guaiphenesin 2.5mg Syrup",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Ascolite D",
      "category": "OTC",
      "image": "/otc4.jpg",
      "description": "Dexteromethorphan Hydrobromide 10mg + Phenylephrine HCL 5mg + CPM 2mg Syrup",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Ascolite LS",
      "category": "OTC",
      "image": "/otc4.jpg",
      "description": "Ambroxyl 30mg + Levosalbutamol 1mg + Guaiphenesin 50mg Syrup",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Cobawish",
      "category": "OTC",
      "image": "/otc4.jpg",
      "description": "Multivitamins + Multiminerals + Antioxidants Capsules",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Lukolyn L",
      "category": "OTC",
      "image": "/otc4.jpg",
      "description": "Levocetrazine Dihydrochloride 5mg + Montelukast Sodium 10mg Tablets",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Panvenia 40",
      "category": "OTC",
      "image": "/otc4.jpg",
      "description": "Pantoprazole 40mg Tablets",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Panvenia DSR",
      "category": "OTC",
      "image": "/otc4.jpg",
      "description": "Pantoprazole 40mg + Domperidone Sustained Release 30mg Capsules",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    },
    {
      "name": "Panvenia IV",
      "category": "OTC",
      "image": "/otc4.jpg",
      "description": "Pantoprazole 40mg Injection",
      "about": ``,
      "uses": ``,
      "benefits": ``,
      "sideEffects": ``
    }
  ],
  NerveSpeciality: [
    {
      "name": "Cobawish PG",
      "category": "Neurology",
      "image": "/product1.jpg",
      "description": "Pregablin 75mg + Methylcobalamin 750mcg Tablets",
      "about": `Cobawish PG Tablet is an anticonvulsant used to manage neuropathic pain, a chronic condition caused by nerve damage. It provides relief from sensations like tingling, burning, or stabbing pain. Cobawish PG is a combination of Methylcobalamin (vitamin B12) and Pregabalin. Methylcobalamin helps protect and rejuvenate nerve fibers, while Pregabalin modifies how nerves send signals to the brain.

Take Cobawish PG Tablet as prescribed by your doctor. Possible side effects include nausea, vomiting, stomach pain, diarrhea, loss of appetite, heartburn, dry mouth, dizziness, sleepiness, and uncoordinated movements. These usually resolve on their own but contact your doctor if persistent.

Cobawish PG Tablet should not be taken during pregnancy or breastfeeding unless directed by your doctor. It can cause drowsiness and dizziness, so avoid driving if not alert. It’s not recommended for children, and alcohol should be avoided as it may increase side effects. Inform your doctor if you have heart disease, severe kidney issues, gastrointestinal problems, or diabetes before using this medication.`,
      "uses": `\n-Treatment of Neuropathic pain`,
      "benefits": `Cobawish PG Tablet is a combination of two drugs: Mecobalamin and Pregabalin. Mecobalamin is used to restore vitamin B12 in the body to treat nerve damage caused by diabetes or other traumatic conditions. It also has neuroprotective effects that help nerve cells function properly and treat neuropathic pain. Pregabalin, on the other hand, prevents neuropathic pain (pain due to damaged nerves), fibromyalgia (musculoskeletal pain), and epilepsy (seizures). It works by calming the damaged or overactive nerves, reducing the pain signals sent out by the affected nerves. Together, Cobawish PG Tablet helps manage neuropathic pain effectively.`,
      "sideEffects": `\n- Nausea
\n- Vomiting
\n- Stomach pain
\n- Diarrhea
\n- Heartburn
\n- Dryness in mouth
\n- Dizziness
\n- Blurred vision`
    },
    {
      "name": "Cobawish NT",
      "category": "Neurology",
      "image": "/product2.jpg",
      "description": "Pregablin 75mg + Notriptyline 10mg Tablets",
      "about": `Cobawish NT Tablet is a combination medicine used to manage neuropathic pain associated with conditions like diabetic peripheral neuropathy, postherpetic neuralgia, and spinal cord injury. It contains Pregabalin (anti-convulsant) and Nortriptyline (antidepressant). Pregabalin alters brain chemicals to reduce pain signals, while Nortriptyline increases serotonin and noradrenaline levels to reduce pain messages in the brain.

Common side effects include dizziness, sleepiness, nausea, blurred vision, swelling in legs and hands, weight gain, and dry mouth. These usually resolve over time, but consult your doctor if they persist. Pregaba NT Tablet may cause drowsiness, so avoid driving unless you are alert. It should not be used by children or those pregnant/breastfeeding unless prescribed. Avoid alcohol to prevent increased dizziness. Always inform your doctor about your health conditions and other medicines.`,
      "uses": `\n-Treatment of Neuropathic pain.`,
      "benefits": `Cobawish NT Tablet is a combination of two medicines, namely: Pregabalin and Nortriptyline. Cobawish NT Tablet is indicated for the management of neuropathic pain associated with diabetic peripheral neuropathy, postherpetic neuralgia, spinal cord injury, etc. Pregabalin is an anti-convulsant which affects the chemicals in the brain that send pain signals across the nervous system. Nortriptyline is an antidepressant which works by increasing the levels of nerve transmitters (serotonin and noradrenaline) in the brain, thereby reducing the pain messages arriving in the brain. Together, Cobawish NT Tablet helps to treat neuropathic pain (pain due to nerve damage).`,
      "sideEffects": `\n- Dizziness
\n- Sleepiness
\n- Nausea
\n- Blurred vision
\n- Peripheral oedema (swelling of lower legs and hands)
\n- Weight gain
\n- Dry mouth`
    }
  ],
  BabyHood: [
    { name: 'BabyHood', category: 'Babycare', image: '/product1.jpg', description: 'Wet Wipes' }
  ],
  Renexa: [
    {
      "name": "CRANDEL D",
      "category": "Renexa",
      "image": "/product_crandel_d.jpg",
      "description": "Cranberry Extract + D-Mannose",
      "about": `CRANDEL -D Tablet contains cranberry extract, along with D-Mannose. The combination helps to prevent the adhesion of bacteria to the urinary tract walls, making it easier for the body to flush out any harmful organisms. Additionally, it can help to boost the immune system and D-Mannose helps to promote urinary health.`,
      "uses": `\n- Promotes urinary health\n- Boosts immune system`,
      "benefits": `The tablet contains cranberry extract and D-Mannose which help to prevent the adhesion of bacteria to the urinary tract walls and promote urinary health. CRANDEL-D Tablet may also be used to help support the body's natural defence mechanisms against bacteria. It may help to boost the immune system, which could potentially help to support overall health. The ingredients may also help to improve urinary function, reducing symptoms such as urinary frequency, urgency or dribbling.`,
      "sideEffects": `\n- No specific side effects listed in provided product data.`
    },
    {
      "name": "CRETINAC",
      "category": "Renexa",
      "image": "/product_cretinac.jpg",
      "description": "Taurine (500mg) + Acetylcysteine (150mg)",
      "about": `CRETINAC Tablet is a combination medicine used in the treatment of chronic kidney disease. It protects the kidneys from damage and reduces the risk of kidney failure. CRETINAC Tablet is taken with or without food in a dose and duration as advised by the doctor.

You should keep taking this medicine for as long as your doctor recommends. If you stop treatment too early your symptoms may come back and your condition may worsen. Let your doctor know about all other medications you are taking as some may affect, or be affected by this medicine.

Before taking it, you should tell your doctor if you have any kidney or liver diseases. Pregnant and breastfeeding women should consult their doctors before taking this medicine.`,
      "uses": `\n- Treatment of Chronic kidney disease`,
      "benefits": `Chronic kidney disease (CKD) refers to the loss of normal kidney function over a long span of time. CRETINAC Tablet has antioxidant properties which helps in elimination of toxic materials such as urea from the kidneys and improves kidney function. When combined with a low or very low protein diet, it helps slow down the progression of CKD and improves the quality of life.`,
      "sideEffects": `\n- Runny nose\n- Diarrhea\n- Abdominal pain\n- Skin irritation\n- Throat irritation\n- Nausea\n- Vomiting\n- Rash\n- Fever`
    },
    {
      "name": "FEBUCEPT 40",
      "category": "Renexa",
      "image": "/product_febucept40.jpg",
      "description": "Febuxostat 40mg",
      "about": `FEBUCEPT 40 Tablet is a medicine used to treat and prevent gout. Gout happens when there is too much uric acid in your body and it forms into crystals that can appear around your joints leading to painful and swollen joints. This medicine helps to keep uric acid levels low.

FEBUCEPT 40 Tablet can be taken with or without food. You should keep taking it as recommended by your doctor even when you are not having a gout attack. If you stop, your symptoms may get worse because of the formation of more crystals in your joints. You can help yourself by making some changes to your diet (eg. avoiding alcohol and non-vegetarian foods) and drinking plenty of fluids.

Tell your doctor right away if you get any symptoms of liver disease like persistent nausea, dark urine, or yellowing of the eyes or skin. Before taking this medicine, let your doctor know if you have any heart problems, stroke, thyroid problems, or kidney or liver problems.`,
      "uses": `\n- Treatment of Gout`,
      "benefits": `FEBUCEPT 40 Tablet is used to prevent and treat gout. Gout is caused by too much uric acid in your body. When the level becomes too high, crystals may form in and around certain joints and your kidneys. This can cause sudden and severe pain, redness, warmth, and swelling. This medicine works by preventing crystals from forming and reducing the levels of uric acid in your blood. This makes it less likely that you will suffer the symptoms and make them milder if you do have them.`,
      "sideEffects": `\n- Nausea\n- Skin rash\n- Abnormal liver function\n- Joint pain\n- Rash`
    },
    {
      "name": "FLEXINTA P",
      "category": "Renexa",
      "image": "/product_flexinta_p.jpg",
      "description": "Pain Relieving Medicine",
      "about": `FLEXINTA P Tablet is a pain relieving medicine. It is used to treat pain and inflammation in conditions like rheumatoid arthritis, ankylosing spondylitis, and osteoarthritis. It is also used to relieve muscle pain, back pain, toothache, or pain in the ear and throat.

FLEXINTA P Tablet should be taken with food. This will prevent you from getting an upset stomach. The dose will depend on what you are taking it for and how well it helps your symptoms. You should take it as advised by your doctor. Do not take more or use it for a longer duration than recommended by the doctor.

Before taking it, you should let your doctor know if you have a history of ulcer or bleeding in your stomach, high blood pressure, or have any trouble with your heart, kidneys, or liver. You should also avoid drinking alcohol while you are taking this medicine, as alcohol can cause excessive drowsiness.`,
      "uses": `\n- Pain relief`,
      "benefits": `FLEXINTA P Tablet is used to treat pain associated with muscles, joints, cancer, dysmenorrhoea (severe abdominal pain during menstruation), tension headache and pain following orthopaedic surgery or injuries. It works by reducing substances in the body that cause pain.`,
      "sideEffects": `\n- Nausea\n- Vomiting\n- Constipation\n- Dryness in mouth\n- Dizziness\n- Headache\n- Sleepiness`
    },
    {
      "name": "GLYCIDEX M1",
      "category": "Renexa",
      "image": "/product_glycidex_m1.jpg",
      "description": "Glimepiride (1mg) + Metformin (500mg) + Pioglitazone (15mg)",
      "about": `GLYCIDEX M1 Tablet ER is a combination medicine that helps control blood sugar levels. This medicine is used together with diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus. It helps in proper utilisation of insulin, thereby lowering the blood sugar levels.

GLYCIDEX M1 Tablet ER should be taken in the dose and duration as advised by your doctor. It must be taken with food to avoid stomach upset. Do not double the dose. Monitor your blood sugar levels regularly while taking it.

Before taking this medicine, inform your doctor if you have any kidney, liver or heart problems. Pregnant or breastfeeding women should also consult their doctor before taking it. Avoid excessive alcohol intake while taking it as this may increase the risk of developing some side effects.`,
      "uses": `\n- Treatment of Type 2 diabetes mellitus`,
      "benefits": `GLYCIDEX M1 Tablet is a medicine that helps to control high blood glucose (sugar) levels. It helps get rid of extra glucose from your body through urine. It also improves the body’s response to the hormone insulin, which is responsible for regulating blood glucose (sugar) levels in our body. The insulin helps to lower your blood glucose levels and prevents them from rising after taking meals. Lowering blood glucose levels is an essential part of managing diabetes to reduce the risk of serious complications.`,
      "sideEffects": `\n- Hypoglycemia (low blood glucose level)\n- Headache\n- Nausea\n- Diarrhea\n- Dizziness\n- Vomiting\n- Anemia (low number of red blood cells)\n- Weakness\n- Sinus infection`
    },
    {
      "name": "GLYCIDEX M2",
      "category": "Renexa",
      "image": "/product_glycidex_m2.jpg",
      "description": "Glimepiride (2mg) + Metformin (500mg) + Pioglitazone (15mg)",
      "about": `GLYCIDEX M2 Tablet ER is a combination medicine that helps control blood sugar levels. This medicine is used together with diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus. It helps in proper utilisation of insulin, thereby lowering the blood sugar levels.

GLYCIDEX M2 Tablet should be taken in the dose and duration as advised by your doctor. It must be taken with food to avoid stomach upset. Do not double the dose. Monitor your blood sugar levels regularly while taking it.

Before taking this medicine, inform your doctor if you have any kidney, liver or heart problems. Pregnant or breastfeeding women should also consult their doctor before taking it. Avoid excessive alcohol intake while taking it as this may increase the risk of developing some side effects.`,
      "uses": `\n- Treatment of Type 2 diabetes mellitus`,
      "benefits": `GLYCIDEX M2 Tablet is a medicine that helps to control high blood glucose (sugar) levels. It helps get rid of extra glucose from your body through urine. It also improves the body’s response to the hormone insulin, which is responsible for regulating blood glucose (sugar) levels in our body. The insulin helps to lower your blood glucose levels and prevents them from rising after taking meals. Lowering blood glucose levels is an essential part of managing diabetes to reduce the risk of serious complications.`,
      "sideEffects": `\n- Hypoglycemia (low blood glucose level)\n- Headache\n- Nausea\n- Diarrhea\n- Dizziness\n- Vomiting\n- Anemia (low number of red blood cells)\n- Weakness\n- Sinus infection`
    },
    {
      "name": "MAXMILIA INJ",
      "category": "Renexa",
      "image": "/product_maxmilia_inj.jpg",
      "description": "Iron Replacement Injection (50mg/ml)",
      "about": `MAXMILIA 50mg/ml Solution for Injection is an iron replacement medicine. It is used to treat a type of anemia where you have fewer amount of red blood cells due to insufficient iron in your body (iron-deficiency anemia). Iron is needed to produce the red blood cells that carry oxygen around your body.

MAXMILIA 50mg/ml Solution for Injection is given by injection or infusion (saline drip) into a vein by your doctor or nurse. You will be watched carefully to make sure you do not have an allergic reaction. It is usually given in two doses, seven days apart.

You should not have this medicine if your anemia is not caused by a lack of iron. Before taking it, tell your doctor if you have rheumatoid arthritis, asthma or other allergies, high blood pressure, or liver problems.`,
      "uses": `\n- Iron deficiency anemia`,
      "benefits": `Iron deficiency anemia is a condition where the body lacks enough healthy red blood cells due to insufficient iron levels. MAXMILIA 50mg/ml Solution for Injection helps restore iron levels in the body, leading to an increase in red blood cell production. This improves oxygen supply to tissues, reduces symptoms like fatigue and weakness, and enhances overall energy levels and quality of life.`,
      "sideEffects": `\n- Headache\n- Dizziness\n- High blood pressure\n- Vomiting\n- Nausea\n- Dark colored stool\n- Injection site reactions (pain, swelling, redness)`
    },
    {
      "name": "MAXMILIA LP",
      "category": "Renexa",
      "image": "/product_maxmilia_lp.jpg",
      "description": "Ferric Pyrophosphate, Folic Acid, Vitamins & Minerals",
      "about": `MAXMILIA LP tablets are commonly used to treat or prevent deficiencies in essential vitamins and minerals that are crucial for overall health. It contains Ferric Pyrophosphate, Folic Acid, Vitamin B12, Biotin, Pantothenic Acid, Vitamin B1 (Thiamine), Vitamin B2 (Riboflavin), Niacin, and Vitamin B6.`,
      "uses": `\n- Treatment or prevention of essential vitamin and mineral deficiencies.`,
      "benefits": `Ferric Pyrophosphate: Provides iron to treat or prevent iron deficiency anemia.
Folic Acid: Essential for cell growth and function, especially during pregnancy to prevent birth defects, and to treat folate deficiency.
Vitamin B12: Helps with red blood cell formation, neurological function, and DNA synthesis.
Biotin: Supports healthy hair, skin, and nails and plays a role in energy metabolism.
Pantothenic Acid (Vitamin B5): Vital for energy production and the synthesis of hormones.
Vitamin B1 (Thiamine): Essential for converting carbohydrates into energy and maintaining nerve function.
Vitamin B2 (Riboflavin): Supports energy production, cell function, and the metabolism of fats, drugs, and steroids.
Niacin (Vitamin B3): Helps with cholesterol levels and supports energy production.
Vitamin B6: Important for brain development and function, and helps convert food into energy.`,
      "sideEffects": `\n- Nausea\n- Stomach upset\n- Headache`
    },
    {
      "name": "MEGAVERSE 40",
      "category": "Renexa",
      "image": "/product_megaverse40.jpg",
      "description": "Megestrol (40mg)",
      "about": `MEGAVERSE 40MG 40mg Tablet is used to treat breast cancer and endometrial cancer. It specifically helps treat breast and endometrial cancer that are hormone dependent. It may also be used for treating low appetite and weight loss in patients with advanced cancer or HIV.

MEGAVERSE 40MG 40mg Tablet should be taken as your doctor advice. Your doctor will decide how much you need to take and for how much time. You may take it with or without food but better to take it at a fixed time. You should take this medicine for as long as it is prescribed for you.

Pregnant and breastfeeding women should not take this medicine. Your doctor might do regular blood tests to check your hormones and blood sugar levels while you are taking this medicine.`,
      "uses": `\n- Breast cancer\n- Endometrial cancer`,
      "benefits": `In Breast cancer: MEGAVERSE 40MG 40mg Tablet relieves the symptoms of breast cancer such as breast lumps, bloody discharge from nipples, or changes in the shape or texture of the breast. It works by altering the production of those hormones in the body that are essential for the growth and spread of breast cancer. It may also interact with other hormones or have a direct effect on the cancer to stop its growth.

In Endometrial cancer: MEGAVERSE 40MG 40mg Tablet is a synthetic hormone which replicates the effect of a natural female hormone called progesterone. It relieves the symptoms of endometrial cancer (a type of cancer that develops in the lining of the womb) such as, abnormal vaginal bleeding, lower back pain, pain during sex, etc. It interferes with the production and working of those hormones in the body that are essential for the growth and spread of endometrial cancer.`,
      "sideEffects": `\n- Increased appetite\n- Weight gain\n- Hot flashes\n- High blood pressure\n- Constipation`
    },
    {
      "name": "MINOBERT DS",
      "category": "Renexa",
      "image": "/product_minobert_ds.jpg",
      "description": "Alpha Ketoanalogue Tablets",
      "about": `MINOBERT DS Tablet is a nutritional supplement used in the treatment of chronic kidney disease. It reduces urea levels in the blood and helps prevent the progression of kidney disease. This way it delays the risk of undergoing long-term dialysis.

MINOBERT DS Tablet is to be taken by mouth with or without food. Take it in the exact dose and duration as advised by the doctor. Taking it along with a low-protein diet may help get the best out of the medicine. Ensure that you maintain adequate calorie intake during treatment. While you are taking this medicine, your doctor may advise regular monitoring of serum calcium levels.

Avoid taking MINOBERT DS Tablet if you are allergic to its ingredients, or have high calcium levels (hypercalcemia). Regular monitoring of calcium levels is recommended during use. Avoid combining MINOBERT DS Tablet with calcium-containing supplements or certain antibiotics (e.g., tetracyclines, quinolones) without consulting a doctor.`,
      "uses": `\n- Delay the Progression of Chronic kidney disease`,
      "benefits": `Chronic kidney disease (CKD) refers to the loss of normal kidney function over a long period. CKD progresses gradually over a few years but may become permanent if left untreated. MINOBERT DS Tablet is a combination of essential amino acids, which, when combined with a low or very low protein diet, slows down the progression of CKD and improves the quality of life.`,
      "sideEffects": `\n- Most side effects do not require any medical attention and disappear as your body adjusts to the medicine.\n- Consult your doctor if they persist.`
    },
    {
      "name": "MIRAVERSE 25",
      "category": "Renexa",
      "image": "/product_miraverse25.jpg",
      "description": "Mirabegron (25mg)",
      "about": `MIRAVERSE 25 Tablet ER is used to treat symptoms of overactive bladder that includes increased or frequent urination, urgent need to urinate and inability to control urination. It helps to relax the muscle surrounding the bladder and increase it's ability to store urine.

It can be taken with or without food. Swallow the medicine as a whole without crushing or chewing it. You should not stop taking the medicine without consulting the doctor as it may lead to the worsening of your symptoms. Patients with liver or kidney disease must be cautious while receiving the prescription.`,
      "uses": `\n- Treatment of Overactive bladder (OAB)`,
      "benefits": `MIRAVERSE 25 Tablet ER helps to treat uncontrollable contractions (spasms) of the bladder muscles that cause frequent urination, urgent need to urinate, and inability to control the passing of urine. It also relieves painful, or frequent urination and reduces the urgency to urinate that may occur with some infections of the urinary tract. This way it helps manage the overactive bladder symptoms efficiently.`,
      "sideEffects": `\n- Constipation\n- Headache\n- High blood pressure\n- Nasal inflammation\n- Urinary tract infection\n- Fast heart rate\n- Joint pain`
    },
    {
      "name": "MIRAVERSE 50",
      "category": "Renexa",
      "image": "/product_miraverse50.jpg",
      "description": "Mirabegron (50mg)",
      "about": `MIRAVERSE 50 Tablet ER is used to treat symptoms of overactive bladder that includes increased or frequent urination, urgent need to urinate and inability to control urination. It helps to relax the muscle surrounding the bladder and increase it's ability to store urine.

It can be taken with or without food. Swallow the medicine as a whole without crushing or chewing it. You should not stop taking the medicine without consulting the doctor as it may lead to the worsening of your symptoms. Patients with liver or kidney disease must be cautious while receiving the prescription.`,
      "uses": `\n- Treatment of Overactive bladder (OAB)`,
      "benefits": `MIRAVERSE 50 Tablet ER helps to treat uncontrollable contractions (spasms) of the bladder muscles that cause frequent urination, urgent need to urinate, and inability to control the passing of urine. It also relieves painful, or frequent urination and reduces the urgency to urinate that may occur with some infections of the urinary tract. This way it helps manage the overactive bladder symptoms efficiently.`,
      "sideEffects": `\n- Constipation\n- Headache\n- High blood pressure\n- Nasal inflammation\n- Urinary tract infection\n- Fast heart rate\n- Joint pain`
    },
    {
      "name": "MIRAVERSE S",
      "category": "Renexa",
      "image": "/product_miraverse_s.jpg",
      "description": "Mirabegron (25mg) + Solifenacin (5mg)",
      "about": `MIRAVERSE S 25mg/5mg Tablet is a combination of two medicines used in the treatment of the symptoms of an overactive bladder. It relieves urinary symptoms like frequent urination, urgent need to urinate and inability to control urination.

It may be taken with or without food, preferably at the same time each day. You should not stop taking the medicine without consulting the doctor as it may lead to the worsening of your symptoms. People with liver or kidney disease must be cautious while receiving the prescription.`,
      "uses": `\n- Treatment of Overactive bladder (OAB)`,
      "benefits": `MIRAVERSE S 25mg/5mg Tablet helps to treat uncontrollable contractions (spasms) of the bladder muscles that cause frequent urination, urgent need to urinate, and inability to control passing of urine. It also relieves painful, or frequent urination and reduces urgency to urinate that may occur with some infections of the urinary tract. This way it helps manage the overactive bladder symptoms efficiently.`,
      "sideEffects": `\n- Constipation\n- Increased heart rate\n- Blurred vision\n- High blood pressure\n- Nasopharyngitis (inflammation of the throat and nasal passages)\n- Urinary tract infection\n- Headache\n- Dryness in mouth`
    },
    {
      "name": "RENSTACAL CZ",
      "category": "Renexa",
      "image": "/product_renstacal_cz.jpg",
      "description": "Calcitriol and Calcium Carbonate Soft Gelatin Capsules",
      "about": `Renstacal CZ capsules are typically used to treat or prevent calcium and vitamin D deficiencies, particularly in patients with conditions that impair calcium absorption, like chronic kidney disease or osteoporosis.

Calcitriol is a synthetic form of vitamin D that helps the body absorb calcium and phosphate from food. Calcium Carbonate provides calcium, essential for maintaining strong bones, teeth, and proper muscle and nerve function. It is often used to treat calcium deficiencies or to prevent osteoporosis, and also helps in managing acid reflux as an antacid.`,
      "uses": `\n- Treat hypocalcemia (low calcium levels)\n- Manage bone diseases (rickets, osteomalacia)\n- Treat calcium deficiencies\n- Prevent osteoporosis`,
      "benefits": `Calcitriol helps the body absorb calcium and phosphate from food and is prescribed to treat conditions like hypocalcemia and manage bone diseases. Calcium Carbonate provides essential calcium for maintaining strong bones, teeth, and proper muscle and nerve function.`,
      "sideEffects": `\n- Constipation\n- Upset stomach\n- Nausea\n- Hypercalcemia (high calcium levels)\n- Kidney stones`
    },
    {
      "name": "SILOVERSE 8",
      "category": "Renexa",
      "image": "/product_siloverse8.jpg",
      "description": "Silodosin (8mg)",
      "about": `SILOVERSE 8 Capsule is an alpha-adrenergic antagonist that is used in the treatment of benign prostatic hyperplasia. It helps to relieve symptoms like difficulty in passing urine. However, it does not decrease the size of the prostate.

It should be taken with food, but take at the same time regularly. Swallow the medicine as a whole. You should not stop taking the medicine without consulting the doctor. Patients with liver or kidney disease must be cautious while receiving the prescription. If you have to undergo eye surgery due to cataracts or glaucoma, inform your eye doctor about the usage of this medicine.`,
      "uses": `\n- Treatment of Benign prostatic hyperplasia`,
      "benefits": `SILOVERSE 8 Capsule works by relaxing muscles in the bladder and prostate. So, it can rapidly relieve the symptoms and make it easier for you to urinate. It helps manage urinary problems such as difficulty passing urine and the need to go to the toilet frequently or urgently.`,
      "sideEffects": `\n- Dizziness\n- Hypotension (low blood pressure)\n- Nasal congestion\n- Diarrhea\n- Retrograde ejaculation`
    },
    {
      "name": "SILOVERSE D8",
      "category": "Renexa",
      "image": "/product_siloverse_d8.jpg",
      "description": "Silodosin (8mg) + Dutasteride (0.5mg)",
      "about": `SILOVERSE-D 8 Tablet is a combination of two medicines that work in different ways to treat men with an enlarged prostate gland. It helps to relieve symptoms such as difficulty urinating or needing to go to the toilet more often. It is not used to prevent prostate cancer.

Take it as a whole, do not break, chew, or crush them. This medicine should not be taken by women or children. Before taking it, tell your doctor if you have low blood pressure or liver or kidney disease.`,
      "uses": `\n- Treatment of Benign prostatic hyperplasia`,
      "benefits": `SILOVERSE-D 8 Tablet reduces the size of your prostate by blocking the production of a hormone which causes it to grow. Additionally, it relaxes the muscles in the bladder and prostate. Together they can rapidly relieve the symptoms and make it easier for you to urinate. However, it may take up to 6 months to notice the full benefits.`,
      "sideEffects": `\n- Decreased libido\n- Ejaculation disorder\n- Breast enlargement in male\n- Breast tenderness in male\n- Headache\n- Dizziness\n- Orthostatic hypotension\n- Nausea\n- Impotence\n- Diarrhea`
    },
    {
      "name": "SOBIVERSE DS",
      "category": "Renexa",
      "image": "/product_sobiverse_ds.jpg",
      "description": "Sodium Bicarbonate (1000mg)",
      "about": `SOBIVERSE DS Tablet is used for the management of metabolic acidosis associated with conditions such as chronic kidney disease (CKD), acute renal failure, diabetic ketoacidosis, severe diarrhea, or shock. It helps delay CKD progression and improve overall survival.

SOBIVERSE DS Tablet relieves irritation by producing carbon dioxide, which neutralizes the acid present in the stomach. It also increases the pH of blood and urine. Excessive intake may cause an electrolyte imbalance, leading to unwanted side effects. It is important to consult a doctor before taking SOBIVERSE DS Tablet if you are suffering from stomach and kidney disease.`,
      "uses": `\n- Management of Metabolic acidosis`,
      "benefits": `SOBIVERSE DS Tablet helps manage metabolic acidosis, a condition where the body produces too much acid or cannot remove it effectively, leading to a decrease in blood pH. It acts as an alkalinizing agent that neutralizes excess acid and restores the body’s normal pH balance. Correcting this imbalance improves breathing and relieves discomfort related to acid buildup.`,
      "sideEffects": `\n- Increased sodium level in blood\n- Brain swelling\n- Alkalosis\n- Decreased potassium level in blood`
    },
    {
      "name": "SOBIVERSE TAB",
      "category": "Renexa",
      "image": "/product_sobiverse_tab.jpg",
      "description": "Sodium Bicarbonate (500mg)",
      "about": `SOBIVERSE TAB Tablet is used for the management of metabolic acidosis associated with conditions such as chronic kidney disease (CKD), acute renal failure, diabetic ketoacidosis, severe diarrhea, or shock. It helps delay CKD progression and improve overall survival.

SOBIVERSE TAB Tablet relieves irritation by producing carbon dioxide, which neutralizes the acid present in the stomach. It also increases the pH of blood and urine, thereby correcting acid indigestion, heartburn. Additionally, it helps in the removal of toxic substances from the body in certain types of poisoning.

SOBIVERSE TAB Tablet may be taken with or without food in a dose and duration as advised by the doctor. Excessive intake may cause an electrolyte imbalance, leading to unwanted side effects. It is important to consult a doctor before taking SOBIVERSE TAB Tablet if you are suffering from stomach and kidney disease.`,
      "uses": `\n- Management of Metabolic acidosis`,
      "benefits": `SOBIVERSE TAB Tablet helps manage metabolic acidosis, a condition where the body produces too much acid or cannot remove it effectively, leading to a decrease in blood pH. This often occurs in people with chronic kidney disease, diabetic ketoacidosis, or severe dehydration. The tablet acts as an alkalinizing agent that neutralizes excess acid and restores the body’s normal pH balance. Correcting this imbalance improves breathing and relieves discomfort related to acid buildup.`,
      "sideEffects": `\n- Increased sodium level in blood\n- Brain swelling\n- Alkalosis\n- Decreased potassium level in blood`
    },
    {
      "name": "SYSTAGUT 15",
      "category": "Renexa",
      "image": "/product_systagut15.jpg",
      "description": "Probiotic (5 Billion spores) + FOS",
      "about": `SYSTAGUT 15 contains Streptococcus thermophiles, Lactobacillus acidophilus, Bifidobacterium longum (5 Billion spores total), and Fructo-Oligosaccharides. They are commonly found in probiotics, which are used to support digestive health and maintain a healthy gut microbiome.

Streptococcus thermophilus helps digest lactose and supports gut health. Lactobacillus acidophilus helps maintain a healthy balance of "good" bacteria and supports the immune system. Bifidobacterium longum supports fiber digestion and may reduce IBS symptoms. FOS is a prebiotic fiber that feeds beneficial bacteria.`,
      "uses": `\n- Support digestive health\n- Maintain healthy gut microbiome\n- Digest lactose\n- Prevent/treat diarrhea\n- Prevent constipation`,
      "benefits": `Streptococcus thermophilus aids lactose digestion and maintains healthy intestinal pH. Lactobacillus acidophilus improves digestion and supports the immune system. Bifidobacterium longum helps prevent constipation and supports immune health. Fructo-Oligosaccharides (FOS) improves digestion and supports immune health by feeding beneficial gut bacteria.`,
      "sideEffects": `\n- Mild bloating\n- Gas\n- Upset stomach`
    },
    {
      "name": "SYSTAGUT 45",
      "category": "Renexa",
      "image": "/product_systagut45.jpg",
      "description": "Probiotic (15 Billion spores) + FOS",
      "about": `SYSTAGUT 45 contains Streptococcus thermophiles, Lactobacillus acidophilus, Bifidobacterium longum (15 Billion spores total), and Fructo-Oligosaccharides. They are commonly found in probiotics, which are used to support digestive health and maintain a healthy gut microbiome.

Streptococcus thermophilus helps digest lactose and supports gut health. Lactobacillus acidophilus helps maintain a healthy balance of "good" bacteria and supports the immune system. Bifidobacterium longum supports fiber digestion and may reduce IBS symptoms. FOS is a prebiotic fiber that feeds beneficial bacteria.`,
      "uses": `\n- Support digestive health\n- Maintain healthy gut microbiome\n- Digest lactose\n- Prevent/treat diarrhea\n- Prevent constipation`,
      "benefits": `Streptococcus thermophilus aids lactose digestion and maintains healthy intestinal pH. Lactobacillus acidophilus improves digestion and supports the immune system. Bifidobacterium longum helps prevent constipation and supports immune health. Fructo-Oligosaccharides (FOS) improves digestion and supports immune health by feeding beneficial gut bacteria.`,
      "sideEffects": `\n- Mild bloating\n- Gas\n- Upset stomach`
    },
    {
      "name": "SYSTAGUT 90",
      "category": "Renexa",
      "image": "/product_systagut90.jpg",
      "description": "Probiotic (25 Billion spores) + FOS",
      "about": `SYSTAGUT 90 contains Streptococcus thermophiles, Lactobacillus acidophilus, Bifidobacterium longum (25 Billion spores total), and Fructo-Oligosaccharides. They are commonly found in probiotics, which are used to support digestive health and maintain a healthy gut microbiome.

Streptococcus thermophilus helps digest lactose and supports gut health. Lactobacillus acidophilus helps maintain a healthy balance of "good" bacteria and supports the immune system. Bifidobacterium longum supports fiber digestion and may reduce IBS symptoms. FOS is a prebiotic fiber that feeds beneficial bacteria.`,
      "uses": `\n- Support digestive health\n- Maintain healthy gut microbiome\n- Digest lactose\n- Prevent/treat diarrhea\n- Prevent constipation`,
      "benefits": `Streptococcus thermophilus aids lactose digestion and maintains healthy intestinal pH. Lactobacillus acidophilus improves digestion and supports the immune system. Bifidobacterium longum helps prevent constipation and supports immune health. Fructo-Oligosaccharides (FOS) improves digestion and supports immune health by feeding beneficial gut bacteria.`,
      "sideEffects": `\n- Mild bloating\n- Gas\n- Upset stomach`
    }
  ]
};

const ProductModal = ({ product, onClose }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const modalContentRef = useState(null);

  const handleScroll = (e) => {
    setIsScrolled(e.target.scrollTop > 100);
  };

  const scrollToTop = () => {
    modalContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] md:max-h-[80vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors z-50"
        >
          <FiX className="text-white text-xl" />
        </button>

        {/* Scroll to Top Button - repositioned */}
        {isScrolled && (
          <button
            onClick={scrollToTop}
            className="absolute bottom-4 right-4 bg-blue-900 p-3 rounded-full hover:bg-blue-800 transition-colors z-50 shadow-lg"
          >
            <FiArrowUp className="text-white text-xl" />
          </button>
        )}

        {/* Modal Content */}
        <div
          ref={modalContentRef}
          onScroll={handleScroll}
          className="overflow-y-auto flex-1 p-6"
        >
          {/* Product Image */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

{/* Product Details */}
<div className="space-y-6">
  <DetailSection title="Salt Composition" content={product.description || 'Not specified'} />
  <DetailSection title="Storage" content={'Store below 30°C'} />
  <DetailSection 
    title="About the Product" 
    content={product.about || 'Not specified'} 
  />
  <DetailSection 
    title={`Uses of ${product.name}`} 
    content={product.uses || 'Not specified'} 
  />
  <DetailSection 
    title={`Benefits of ${product.name}`} 
    content={product.benefits || 'Not specified'} 
  />
  <DetailSection 
    title="Side Effects" 
    content={product.sideEffects || 'Not specified'} 
  />
</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DetailSection = ({ title, content }) => {
  // Function to render content with paragraphs, bullet points, and bold text
  const renderContent = (content) => {
    return content.split('\n\n').map((paragraph, pIndex) => (
      <p key={pIndex} className="mb-4">
        {paragraph.split('\n').map((line, lIndex) => {
          // Check if the line is part of a bullet list
          if (line.trim().startsWith('-')) {
            return (
              <ul key={lIndex} className="list-disc list-inside">
                {line.split('\n').map((item, iIndex) => (
                  <li key={iIndex}>
                    {item.replace('-', '').split('<b>').map((text, bIndex) => (
                      bIndex % 2 === 0 ? text : <b key={bIndex}>{text}</b>
                    ))}
                  </li>
                ))}
              </ul>
            );
          }
          // Handle bold text within paragraphs
          return (
            <span key={lIndex}>
              {line.split('<b>').map((text, bIndex) => (
                bIndex % 2 === 0 ? text : <b key={bIndex}>{text}</b>
              ))}
            </span>
          );
        })}
      </p>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="space-y-2"
    >
      <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
      <div className="text-gray-600 leading-relaxed">
        {renderContent(content)}
      </div>
    </motion.div>
  );
};

export default function ProductsSection() {
  const [activeSection, setActiveSection] = useState('CardioPlus');
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4" id="products-section">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center fade-in-up">
          Our Products
        </h2>

        {/* Section Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(products).map((section) => (
            <button
              key={section}
              data-section={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeSection === section
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-blue-900 hover:bg-blue-100'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div id={activeSection} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products[activeSection].map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                translateY: 10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col min-h-[160px] "> {/* Set a minimum height */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-blue-900">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                >
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
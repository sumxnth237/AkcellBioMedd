import { motion } from 'framer-motion';

export default function AboutSection() {
  const correctedText = `
  At Akcell, we as one of India's fastest growing pharmaceutical companies, provide quality products with the highest compliance standards. Our policies and procedures support heallthcare professionals and patients in leading healthier lives. Our WHO GMP-compliant and ISO 9001:2018-accredited manufacturing facilities ensure top-quality production.

  We maintain strong customer relationships and drive organic growth across our business. Our brands are manufactured in state-of-the-art facilities, with third-party units equipped with high-tech machinery to formulate premium pharmaceutical ranges meeting stringent quality, safety, and hygiene standards. Our CGMP-GLP authorized, globally accredited manufacturing processes minimize waste and enhance production efficiency.

  Through world-class facilities, we emphasize consistent quality improvements, skill enhancement, and exceeding client and customer expectations. Our quality assurance department upholds our commitment to quality at every stage - from procurement and manufacturing to packing and distribution - conforming to international standards.

  Our integration philosophy stems from positive experiences, maintaining relationships, and investing in customer activities. In today's evolving healthcare landscape, we help payers, providers, and stakeholders innovate to deliver affordable, accountable, high-quality care.

  We continue expanding our market presence across India in chronic segments like Cardio-Diabetes, Urology, Neurology, Nephrology, and Gastro super-specialties, supported by robust logistics and distribution networks.`;

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
            Welcome to AkcellBioMedd
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify text-lg">
            {correctedText.split('\n\n').map((para, index) => (
              <motion.p
                key={index}
                className="mb-4 cursor-pointer origin-left"
                whileHover={{
                  translateY: 10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
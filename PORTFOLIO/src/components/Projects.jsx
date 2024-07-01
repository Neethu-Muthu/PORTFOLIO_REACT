import React from 'react'

const Projects = () => {
  return (
    <>
 <section id="portfolio" className="ml-5 mt-6">
      <h2 className="font-semibold text-2xl mt-6 text-blue-700">Projects</h2>
      <dl className="mt-6">
        <dt className="font-medium">AI Text Detection using BERT:</dt>
        <dd>Aimt o develop a model that can effectively detect whether the text is generated by a machine or a human.</dd>
      </dl>
      <dl>
        <dt className="font-medium">Network Intrusion Detection Using Deep Learning:</dt>
        <dd>Developed an advanced intrusion detection system using RNNs and LSTM, showcasing cybersecurity expertise.</dd>
      </dl>
      <dl>
        <dt className="font-medium">Electricity Bill Management System:</dt>
        <dd>Developed an online platform for convenient electricity bill payments, emphasizing user-friendly design and efficient utility management.</dd>
      </dl>
    </section>
    </>
  )
}

export default Projects
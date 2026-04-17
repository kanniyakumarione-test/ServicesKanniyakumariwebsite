import LandingPageLayout from "../components/LandingPageLayout"

export default function DataAnnotationPage() {
  return (
    <LandingPageLayout
      theme="violet"
      eyebrow="Data Annotation Services"
      title="High-Quality Data Annotation for"
      highlight="AI & Machine Learning Models"
      description="We provide precise image, video, and text data labeling to train, validate, and scale your computer vision and natural language processing systems."
      snapshotTitle="Service Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Image bounding boxes, polygon segmentation, taxonomy mapping, and NLP tagging." },
        { label: "Business Outcome", value: "Highly accurate training data that drastically reduces model bias and error rates." },
        { label: "Works Best When", value: "Your AI company needs human-in-the-loop accuracy to scale complex ML models." },
      ]}
      bullets={[
        "Computer Vision Labeling",
        "NLP & Text Annotation",
        "Video Object Tracking",
        "Audio Transcription",
      ]}
      idealFor="AI startups, research teams, software agencies, and enterprises building predictive models or autonomous systems."
      deliverable="A securely managed, QA-verified dataset formatted precisely to your schema requirements."
      ctaTitle="Need clean data for your next AI project?"
      ctaText="Poor data guarantees poor model performance. Let our dedicated team handle the complex labeling so your engineers can focus on architecture."
      sections={[
        {
          title: "Computer Vision Annotation",
          body: "We excel at 2D/3D bounding boxes, polygon and semantic segmentation, keypoint mapping, and landmark annotation for autonomous systems, medical imaging, and retail AI.",
        },
        {
          title: "NLP and Text Annotation",
          body: "From sentiment analysis and entity recognition to intent classification and precise taxonomy mapping, we provide the conversational context that language models require.",
        },
        {
          title: "Quality Assurance & Scale",
          body: "Every dataset undergoes rigorous human-in-the-loop verification processes to guarantee edge-case scenarios are captured correctly with a 99%+ accuracy target.",
        },
      ]}
    />
  )
}

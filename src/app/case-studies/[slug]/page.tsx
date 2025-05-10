'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

const CaseStudies: Record<
  string,
  {
    title: string;
    description: string;
    mainimage: string;
    image: string;
    challenge: string[];
    challengeDetail: {
      planningText: string;
      inventoryText: string;
      supplyChainText: string;
    };
    solution: string;
    solutionImage: string;
    results: {
      text: string[];
      metrics: string[];
    };
  }
> = {
  pleasure: {
    title: 'Pharmaceutical Supply Chain Optimization',
    mainimage:'/herobg.webp',
    description:
      'For one leading pharmaceutical laboratory, success and double-digit sales growth came with a cost: an overburdened supply chain that threatened to reduce market share.',
    image: '/herobg.webp',
    challenge: [
      'The biggest challenge was that Arguzo was not utilizing technology properly. Too much of the work was still being recorded manually, which meant that the numbers took a long time to note down and then to be analyzed. Live data was also not available and decisions can only be made after all the required data and been received. This was holding Arguzo back; they knew they could corner more of the market if they had the ability to be more mobile.',
      'The work addressed three critical issues for Pharm Ltd.:',
    ],
    challengeDetail: {
      planningText: 'Improve sales and operations and production planning: The teams focused their efforts on a few of the highest-value S&OP levers in order to review the current planning process, identify gaps in the planning infrastructure and analytically understand demand and supply variability.',
      inventoryText: 'Determine the right inventory level: With hundreds of medications in the market, Pharm Ltd. needed a proper method to predict and manage their inventory. Using a mean absolute percentage analysis (MAPE), the teams defined appropriate levels for raw materials and finished products by mapping actual versus forecasted sales on the most important SKUs.',
      supplyChainText: 'Optimize the supply chain for perfect order planning: The diagnostic determined the stressors that affected sales and service levels. The teams focused on resolving issues related to higher-than-normal back-orders and lead times, which stressed the entire supply chain and led to delays in medications reaching consumers.'
    },
    solution: 'The solution WP consulting came up with combined cutting edge technology with real world practicality. Everyone knew that the systems had to be updated, the real challenge was updating them without disrupting the whole organization in a negative way. The solution was to introduce proper workload management done through computers, while providing mobile platforms to the stakeholders.',
    solutionImage: '/about.webp',
    results: {
      text: [
        'All data and archives in a single spot. No need for mailing payslips or continually update the individual data of every representative.',
        'Every customer gets a modified methodology, not a one-size-fits-all arrangement. We comprehend that every pioneer and every association is looked with interesting difficulties and conditions, and therefore requires explicit arrangements and bearing.'
      ],
      metrics: [
        'Reduced lead time by 43%',
        'Decreased variability by 50%',
        'Lowered the risk of back-order by 95%',
        'Increased stock for finished goods by 10%'
      ]
    }
  },
  innovatie: {
    title: 'Pharmaceutical Supply Chain Optimization',
    mainimage:'/herobg.webp',
    description:
      'For one leading pharmaceutical laboratory, success and double-digit sales growth came with a cost: an overburdened supply chain that threatened to reduce market share.',
    image: '/case-study-banner.jpg',
    challenge: [
      'The biggest challenge was that Arguzo was not utilizing technology properly. Too much of the work was still being recorded manually, which meant that the numbers took a long time to note down and then to be analyzed. Live data was also not available and decisions can only be made after all the required data and been received. This was holding Arguzo back; they knew they could corner more of the market if they had the ability to be more mobile.',
      'The work addressed three critical issues for Pharm Ltd.:',
    ],
    challengeDetail: {
      planningText: 'Improve sales and operations and production planning: The teams focused their efforts on a few of the highest-value S&OP levers in order to review the current planning process, identify gaps in the planning infrastructure and analytically understand demand and supply variability.',
      inventoryText: 'Determine the right inventory level: With hundreds of medications in the market, Pharm Ltd. needed a proper method to predict and manage their inventory. Using a mean absolute percentage analysis (MAPE), the teams defined appropriate levels for raw materials and finished products by mapping actual versus forecasted sales on the most important SKUs.',
      supplyChainText: 'Optimize the supply chain for perfect order planning: The diagnostic determined the stressors that affected sales and service levels. The teams focused on resolving issues related to higher-than-normal back-orders and lead times, which stressed the entire supply chain and led to delays in medications reaching consumers.'
    },
    solution: 'The solution WP consulting came up with combined cutting edge technology with real world practicality. Everyone knew that the systems had to be updated, the real challenge was updating them without disrupting the whole organization in a negative way. The solution was to introduce proper workload management done through computers, while providing mobile platforms to the stakeholders.',
    solutionImage: '/solution-image.jpg',
    results: {
      text: [
        'All data and archives in a single spot. No need for mailing payslips or continually update the individual data of every representative.',
        'Every customer gets a modified methodology, not a one-size-fits-all arrangement. We comprehend that every pioneer and every association is looked with interesting difficulties and conditions, and therefore requires explicit arrangements and bearing.'
      ],
      metrics: [
        'Reduced lead time by 43%',
        'Decreased variability by 50%',
        'Lowered the risk of back-order by 95%',
        'Increased stock for finished goods by 10%'
      ]
    }
  },
  elevate: {
    title: 'Pharmaceutical Supply Chain Optimization',
    mainimage:'/aboutimage.jpg',
    description:
      'For one leading pharmaceutical laboratory, success and double-digit sales growth came with a cost: an overburdened supply chain that threatened to reduce market share.',
    image: '/case-study-banner.jpg',
    challenge: [
      'The biggest challenge was that Arguzo was not utilizing technology properly. Too much of the work was still being recorded manually, which meant that the numbers took a long time to note down and then to be analyzed. Live data was also not available and decisions can only be made after all the required data and been received. This was holding Arguzo back; they knew they could corner more of the market if they had the ability to be more mobile.',
      'The work addressed three critical issues for Pharm Ltd.:',
    ],
    challengeDetail: {
      planningText: 'Improve sales and operations and production planning: The teams focused their efforts on a few of the highest-value S&OP levers in order to review the current planning process, identify gaps in the planning infrastructure and analytically understand demand and supply variability.',
      inventoryText: 'Determine the right inventory level: With hundreds of medications in the market, Pharm Ltd. needed a proper method to predict and manage their inventory. Using a mean absolute percentage analysis (MAPE), the teams defined appropriate levels for raw materials and finished products by mapping actual versus forecasted sales on the most important SKUs.',
      supplyChainText: 'Optimize the supply chain for perfect order planning: The diagnostic determined the stressors that affected sales and service levels. The teams focused on resolving issues related to higher-than-normal back-orders and lead times, which stressed the entire supply chain and led to delays in medications reaching consumers.'
    },
    solution: 'The solution WP consulting came up with combined cutting edge technology with real world practicality. Everyone knew that the systems had to be updated, the real challenge was updating them without disrupting the whole organization in a negative way. The solution was to introduce proper workload management done through computers, while providing mobile platforms to the stakeholders.',
    solutionImage: '/solution-image.jpg',
    results: {
      text: [
        'All data and archives in a single spot. No need for mailing payslips or continually update the individual data of every representative.',
        'Every customer gets a modified methodology, not a one-size-fits-all arrangement. We comprehend that every pioneer and every association is looked with interesting difficulties and conditions, and therefore requires explicit arrangements and bearing.'
      ],
      metrics: [
        'Reduced lead time by 43%',
        'Decreased variability by 50%',
        'Lowered the risk of back-order by 95%',
        'Increased stock for finished goods by 10%'
      ]
    }
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  if (!slug || !CaseStudies[slug]) {
    return <div className="text-center py-10">Case study not found.</div>;
  }

  const study = CaseStudies[slug];

  return (
    <div className="container mx-auto mt-12!">
      <div className="relative w-full h-[500px] mb-8">
        <Image
          src={study.image || "/placeholder-chess.jpg"}
          alt={study.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
          <div className="text-white max-w-2xl px-8 md:px-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h1>
            <p className="text-lg">{study.description}</p>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 py-8 space-y-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-blue-800 font-medium">
            The effort vastly improved the company's planning and execution functions, they knew that in order to
            succeed in this era of technology their accounting systems needed to be much more robust than what they
            are. They turned to WP consulting to improve their accounting systems.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 pb-2 border-b border-gray-200">Challenge</h2>
          {study.challenge.map((point, idx) => (
            <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{point}</p>
          ))}
          <div className="space-y-8 mt-8 pl-2 border-l-4 border-blue-500">
            <div className="pl-6">
              <h3 className="font-semibold text-xl text-blue-800 mb-2">Improve sales and operations and production planning:</h3>
              <p className="text-gray-700 leading-relaxed">
                The teams focused their efforts on a few of the highest-value S&OP levers in order to review the current planning
                process, identify gaps in the planning infrastructure and analytically understand demand and supply variability.
              </p>
            </div>
            <div className="pl-6">
              <h3 className="font-semibold text-xl text-blue-800 mb-2">Determine the right inventory level:</h3>
              <p className="text-gray-700 leading-relaxed">
                With hundreds of medications in the market, Pharm Ltd. needed a proper method to predict and manage their
                inventory. Using a mean absolute percentage analysis (MAPE), the teams defined appropriate levels for raw
                materials and finished products by mapping actual versus forecasted sales on the most important SKUs.
              </p>
            </div>
            <div className="pl-6">
              <h3 className="font-semibold text-xl text-blue-800 mb-2">Optimize the supply chain for perfect order planning:</h3>
              <p className="text-gray-700 leading-relaxed">
                The diagnostic determined the stressors that affected sales and service levels. The teams focused on resolving
                issues related to higher-than-normal back-orders and lead times, which stressed the entire supply chain and led to
                delays in medications reaching consumers.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">Solution</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The solution WP consulting came up with combined cutting edge technology with real world practicality.
                  Everyone knew that the systems had to be updated, the real challenge was updating them without disrupting
                  the whole organization in a negative way.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The solution was to introduce proper workload management done through computers, while providing mobile
                  platforms to the stakeholders.
                </p>
              </div>
              <div className="relative h-[320px] w-full">
                <Image
                  src={study.solutionImage || "/placeholder-chess.jpg"}
                  alt="Strategic solution visualization"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 pb-2 border-b border-gray-200">Results</h2>
          {study.results.text.map((text, idx) => (
            <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{text}</p>
          ))}
          <div className="mt-10">
            <h3 className="font-semibold text-xl text-blue-800 mb-4">By the numbers, the effort:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {study.results.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                  <div className="text-blue-600 font-bold text-xl">•</div>
                  <div className="text-gray-800 font-medium">{metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  "contacts": [ // multi-purpose; to use provide id and role
    {
      "contactId": "",
      "individualName": "",
      "organizationName": "",
      "positionName": "",
      "onlineResource": [
        {
          "linkage": "",
          "doi": "", // ADIwg extension
          "name": "",
          "description": "",
          "function": ""
        }
      ],
      "contactInstructions": "",
      "voice": [
        {
          "phoneName": "",
          "phoneNumber": ""
        }
      ],
      "fax": [
        {
          "phoneName": "",
          "phoneNumber": ""
        }
      ],
      "address": {
        "deliveryPoint": [""],
        "city": "",
        "administrativeArea": "",
        "postalCode": "",
        "country": "",
        "electronicMailAddress": [""]
      }
    }
  ],
  "metadata": {
    "projectManagement": {  // ADIwg extension
      "projectId": "",
      "projectRecordComplete": "",
      "projectIsLocatable": "",
      "dataAvailable": "",
      "projectMetadataLastUpdated": "",
      "shortAbstract": "",
      "editLink": ""
    },
    "fileIdentifier": "", // GUID
    "hierarchyLevel": [""],
    "contact": [
      {
        "contactId": "",
        "role": ""
      }
    ],
    "dateStamp": "",
    "spatialReference": [""],
    "identificationInfo": {
      "citation": {
        "title": "",
        "date": [
          {
            "date": "",
            "dateType": ""
          }
        ],
        "edition": "",
        "citedResponsibleParty": [
          {
            "contactId": "",
            "role": ""
          }
        ],
        "presentationForm": "",
        "isbn": "",
        "issn": ""
      },
      "pointOfContact": [
        {
          "contactId": "",
          "role": ""
        }
      ],
      "abstract": "",
      "status": "",
      "language": [";"],
      "topicCategory": [""],
      "supplementalInfo": "",
      "keywords": [
        {
          "keyword": [""],
          "keywordType": "",
          "thesaurus": {
            "thesaurusLink": "",
            "citation": {
              "title": "",
              "date": [
                {
                  "date": "",
                  "dateType": ""
                }
              ],
              "edition": "",
              "citedResponsibleParty": [
                {
                  "contactId": "",
                  "role": ""
                }
              ],
              "presentationForm": "",
              "isbn": "",
              "issn": ""
            }
          }
        }
      ],
      "graphicOverview": [
        {
          "fileName": "",
          "fileDescription": "",
          "fileType": "",
          "fileLink": "" // ADIwg extension
        }
      ],
      "useLimitations": [""],
      "legalConstraints": [
        {
          "accessConstraints": [""],
          "useConstraints": [""],
          "otherConstraints": [""]
        }
      ],
      "extent": [
        {
          "description": "",
          "geographicElement":[
            {
              "type": "Feature", // choose only one geometry {} per "Feature"
              "bbox":[
                0.0, // west longitude (numeric)
                0.0, // south latitude (numeric)
                0.0, // east longitude (numeric)
                0.0  // north latitude (numeric)
              ],
              "id": "",
              "properties": {
                "name": "",
                "description": "",
                "includesData": true,  // for polygons (default)
                "date": [""],
                "timeInstant": [
                  {
                    "id":"",
                    "description": "",
                    "timePosition": ""
                  }
                ],
                "timePosition": [
                  {
                    "id":"",
                    "description": "",
                    "beginPosition": "",
                    "endPosition": ""
                  }
                ],
                "identifier": "",
                "idAuthority": "", // URL of id issuing authority
                "scope": "",
                "initiativeType": ""
              },
              "geometry":{
                "type": "Point",
                "coordinates": [
                  0.0, // longitute
                  0.0, // latitude
                  0.0  // elevation (optional)
                ]
              },
              "geometry": {
                "type": "LineString",
                "coordinates": [
                  [
                    0.0, // longitute
                    0.0, // latitude
                    0.0  // elevation (optional)
                  ],
                  [
                    0.0, // longitute
                    0.0, // latitude
                    0.0  // elevation (optional)
                  ]
                ]
              },
              "geometry": {
                "type":"Polygon",
                "coordinates": [ // an array of linear rings
                  [ // first ring is exterior boundary
                    [
                      0.0, // longitute
                      0.0, // latitude
                      0.0  // elevation (optional)
                    ],
                    [
                      0.0, // longitute
                      0.0, // latitude
                      0.0  // elevation (optional)
                    ]
                  ],
                  [ // subsequent rings are interior exclusion areas (optional)
                    [
                      0.0, // longitute
                      0.0, // latitude
                      0.0  // elevation (optional)
                    ],
                    [
                      0.0, // longitute
                      0.0, // latitude
                      0.0  // elevation (optional)
                    ]
                  ]
                ]
              },
              "crs": {
                "type": "", // type is either "name" or "link"
                "properties": {
                  "name": "", // if type = "name"
                  "href": "", // if type = "link"
                  "type": ""  // if type = "link"
                }
              }
            },
            {
              "type": "FeatureCollection", // grouping of features, can be of any geometry type
              "id": "",
              "bbox": [
                0.0, // west longitude (numeric)
                0.0, // south latitude (numeric)
                0.0, // east longitude (numeric)
                0.0  // north latitude (numeric)
              ],
              "properties": {
                "name":"",
                "description": "",
                "includesData": true // default
              },
              "crs": {
                "type": "",
                "properties": {
                  "name": "", // if type = "name"
                  "href": "", // if type = "link"
                  "type": ""  // if type = "link"
                }
              },
              "features":[{}] // include any feature(s)
            }
          ],
          "temporalElement": {
            "date": [""],
            "timeInstant": [
              {
                "id":"",
                "description": "",
                "timePosition": ""
              }
            ],
            "timePosition": [
              {
                "id":"",
                "description": "",
                "beginPosition": "",
                "endPosition": ""
              }
            ]
          },
          "verticalElement":[
            {
              "minimumValue": 0.0,
              "maximumValue": 0.0,
              "verticalCRSTitle": "",
              "verticalCRSLink": ""
            }
          ]
        }
      ]
    },
    "distributionInfo": [
      {
        "distributorContact": {
          "contactId": "",
          "role": ""
        },
        "distributorTransferOptions": [
          {
            "online": [
              {
                "linkage": "",
                "doi": "", //ADIwg extension
                "name": "",
                "description": "",
                "function": ""
              }
            ]
          }
        ]
      }
    ],
    "associatedResource": [ // ADIwg extension
      {
        "name": {
          "citation": {
            "title": "",
            "date": [
              {
                "date": "",
                "dateType": ""
              }
            ],
            "edition": "",
            "citedResponsibleParty": [
              {
                "contactId": "",
                "role": ""
              }
            ],
            "presentationForm": "",
            "isbn": "",
            "issn": ""
          }
        },
        "associationType": "",
        "initiativeType": "",
        "metadataReference": {
          "citation": {
            "title": "",
            "date": [
              {
                "date": "",
                "dateType": ""
              }
            ],
            "edition": "",
            "citedResponsibleParty": [
              {
                "contactId": "",
                "role": ""
              }
            ],
            "presentationForm": "",
            "isbn": "",
            "issn": ""
          }
        }
      }
    ]
  }
}
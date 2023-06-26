# century-code-assesment

## Installation

century-code-assesment requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
```


## Run

```sh
npm start ${CONTAINER}  ${MBL}
```
- You can use the following data to execute it: 
```sh
MasterBLNumber      ContainerNumber
TWTPE0000255702     RFCU5026071
TWTPE0000255702     TLLU5950717
TWTPE0000255702     UACU5709275
TWTPE0000255703     HAMU1302714
TWTPE0000255703     TCLU8473857
TWTPE0000255703     UETU5473570
TWTPE0000255929     CAIU4227247
TWTPE0000255929     CAIU8293015
TWTPE0000255930     GLDU7608164
TWTPE0000255930     UACU5507588
TWTPE0000256654     CAAU5328563
TWTPE0000256654     FANU1724563
TWTPE0000256654     TCKU6544403
```

- The program will create a folder called "files" where you will find the output json files sorted by files "normalizedSections", "filesrawSections", "files errors".
- The format of each file is as follows
```sh
${mbl}-${container}.json
```

## Examples
- Run
```sh
npm run start TLLU5950717 TWTPE0000255702
```
- output

```sh
files\normalizedSections\TWTPE0000255702-TLLU5950717.json

{
    "departure": " Kaohsiung ",
    "revisedArrival": " 2023/04/04, 7:00 ",
    "vesselsNames": [
        " HMM GARAM ",
        " HMM GARAM "
    ]
}
```

```sh
files\rawSections\TWTPE0000255702-TLLU5950717.json

{
    "shipmentStatusHistory": [
        {
            "event": " Booked By Customer ",
            "date": " 2022/12/19, 10:55 ",
            "location": " TAIPEI ",
            "comments": "  -  "
        },
        {
            "event": " Booked On Flight / Vessel ",
            "date": " 2023/01/19, 23:13 ",
            "location": " TAIPEI ",
            "comments": "  -  "
        },
        {
            "event": " Received Export Warehouse / CY ",
            "date": " 2023/02/03, 8:16 ",
            "location": " TAICHUNG ",
            "comments": " UACU5709275 "
        },
        {
            "event": " Self Delivered ",
            "date": " 2023/02/09, 0:00 ",
            "location": " TAICHUNG ",
            "comments": "  -  "
        },
        {
            "event": " Changed Estimated Time Of Departure ",
            "date": " 2023/02/19, 22:00 ",
            "location": " TAICHUNG ",
            "comments": "  -  "
        },
        {
            "event": " Shipping Notice Sent To Legacy ",
            "date": " 2023/02/20, 11:57 ",
            "location": " TAIPEI ",
            "comments": "  -  "
        },
        {
            "event": " Estimated Time Of Departure ",
            "date": " 2023/02/20, 0:00 ",
            "location": " KAOHSIUNG (TAKAO) ",
            "comments": " HMM GARAM "
        },
        {
            "event": " Departed / Confirmed On Board ",
            "date": " 2023/02/20, 15:45 ",
            "location": " KAOHSIUNG (TAKAO) ",
            "comments": " TLLU5950717 "
        },
        {
            "event": " Changed Estimated Time Of Departure ",
            "date": " 2023/02/20, 22:00 ",
            "location": " TAICHUNG ",
            "comments": " C08;CARRIER_DELAYED_VESSEL "
        },
        {
            "event": " Changed ETA Of Flight/Vessel ",
            "date": " 2023/03/29, 19:00 ",
            "location": " SOUTHAMPTON ",
            "comments": " 980;CONFIRM EXTERNAL BOOKING "
        },
        {
            "event": " Changed ETA Of Flight/Vessel ",
            "date": " 2023/04/02, 3:00 ",
            "location": " SOUTHAMPTON ",
            "comments": " 980;CONFIRM EXTERNAL BOOKING "
        },
        {
            "event": " Changed ETA Of Flight/Vessel ",
            "date": " 2023/04/03, 7:00 ",
            "location": " SOUTHAMPTON ",
            "comments": " 980;CONFIRM EXTERNAL BOOKING "
        },
        {
            "event": " Estimated Time Of Arrival ",
            "date": " 2023/04/03, 7:00 ",
            "location": " SOUTHAMPTON ",
            "comments": " UACU5709275 "
        },
        {
            "event": " Self Pickup ",
            "date": " 2023/04/04, 0:00 ",
            "location": " SOUTHAMPTON ",
            "comments": "  -  "
        },
        {
            "event": " Changed ETA Of Flight/Vessel ",
            "date": " 2023/04/04, 0:01 ",
            "location": " SOUTHAMPTON ",
            "comments": " 980;CONFIRM EXTERNAL BOOKING "
        },
        {
            "event": " Received Import Warehouse / CY ",
            "date": " 2023/04/03, 23:06 ",
            "location": " SOUTHAMPTON ",
            "comments": " RFCU5026071 "
        },
        {
            "event": " Arrived ",
            "date": " 2023/04/03, 23:06 ",
            "location": " SOUTHAMPTON ",
            "comments": "  -  "
        },
        {
            "event": " Changed ETA Of Flight/Vessel ",
            "date": " 2023/04/04, 7:00 ",
            "location": " SOUTHAMPTON ",
            "comments": " 8;CHANGED SCHEDULE "
        },
        {
            "event": " Estimated Arrival Final CY / CFS ",
            "date": " 2023/04/04, 7:00 ",
            "location": " SOUTHAMPTON ",
            "comments": "  -  "
        }
    ],
    "shipmentDetails": {
        "destination": " SOUTHAMPTON, UK. ",
        "revisedArrival": " 2023/04/04, 7:00 ",
        "departure": " Kaohsiung ",
        "scheduledDeparture": " 2023/02/20, 0:00 ",
        "revisedDeparture": " 2023/02/20, 22:00 ",
        "scheduledArrival": " 2023/04/03, 7:00",
        "numberOfPieces": " 666 ",
        "totalWeight": " 12147.88 KGS ",
        "totalVolume": " 183.77 CBM "
    }
}
```








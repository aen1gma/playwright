const generateGetUserDetailsPayload = (username) => {
    return {
        "Message": {
            "$type": "NextGen.Messaging.Contracts.Requests.Features.Shell.Settings.Users.FetchUserByUsernameBusRequest, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
            "username": username
        },
        "MessageType": "NextGen.Messaging.Contracts.Requests.Features.Shell.Settings.Users.FetchUserByUsernameBusRequest, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
    }
};

const generateCreateContactPayload = (eventId, firstName, lastName, email) => {
    return {
        "Message": {
            "$type": "NextGen.Messaging.Contracts.Requests.WrappedCommandToRequest, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
            "command": {
                "$type": "NextGen.Messaging.Contracts.Commands.CreateContactBusCommand, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                "contact": {
                    "$type": "NextGen.Messaging.Dtos.ContactDto, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                    "CustomFieldParams": [],
                    "attendeeAppConsent": 1,
                    "billing": {
                        "$type": "NextGen.Messaging.Dtos.BillingDto, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                        "address": {
                            "$type": "NextGen.Messaging.Dtos.AddressDto, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                            "addressLineOne": null,
                            "addressLineThree": null,
                            "addressLineTwo": null,
                            "city": null,
                            "country": null,
                            "postcode": null,
                            "state": null
                        },
                        "attendeeAppConsent": "0",
                        "dataProcessingConsent": "0",
                        "email": null,
                        "fax": null,
                        "firstName": null,
                        "lastName": null,
                        "organization": null,
                        "phone": null,
                        "position": null,
                        "privacyRequired": "0",
                        "title": null
                    },
                    "contactLinking": 0,
                    "dataProcessingConsent": 1,
                    "dietaryIds": "",
                    "duplicateContacts": [],
                    "eventCheckinOptionalAlertDto": {
                        "$type": "NextGen.Messaging.Dtos.OptionalAlertDto, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                        "alertLevel": 1,
                        "parameter": 0.1,
                        "sendAlert": false
                    },
                    "eventId": eventId,
                    "firstName": firstName,
                    "isDirty": true,
                    "isEncrypted": false,
                    "lastName": lastName,
                    "lastNameChanged": false,
                    "masterContactId": "00000000-0000-0000-0000-000000000000",
                    "oldFirstName": "",
                    "oldLastname": "",
                    "oldValues": {},
                    "photo": null,
                    "photoStatus": 0,
                    "primaryAddress": {
                        "$type": "NextGen.Messaging.Dtos.AddressDto, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                        "addressLineOne": null,
                        "addressLineThree": null,
                        "addressLineTwo": null,
                        "city": null,
                        "country": null,
                        "postcode": null,
                        "state": null
                    },
                    "primaryEmail": email,
                    "privacyData": {},
                    "privacyRequired": 1,
                    "selectedDuplicate": "",
                    "socialMedia": {
                        "$type": "NextGen.Messaging.Dtos.SocialMediaDto, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                        "facebookUrl": null,
                        "instagramUrl": null,
                        "linkedInUrl": null,
                        "pinterestUrl": null,
                        "twitterHandle": null,
                        "youTubeUrl": null
                    }
                },
                "forceSynchronousPhotoUpload": true,
                "ietfLanguageTag": "en-US",
                "privacyDataProtectionLog": null,
                "source": "Attendee Panel",
                "updatePhoto": true
            }
        },
        "MessageType": "NextGen.Messaging.Contracts.Requests.WrappedCommandToRequest, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
    }
};

const generateGetContactDetailsPayload = (eventId, userId, contactId) => {
    return {
        "Message": {
            "$type": "NextGen.Messaging.Contracts.Requests.FindContactDetailsForUserRequest, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
            "contactId": contactId,
            "eventId": eventId,
            "userId": userId
        },
        "MessageType": "NextGen.Messaging.Contracts.Requests.FindContactDetailsForUserRequest, NextGen.Messaging, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
    }
};

module.exports = { generateGetUserDetailsPayload, generateCreateContactPayload, generateGetContactDetailsPayload };
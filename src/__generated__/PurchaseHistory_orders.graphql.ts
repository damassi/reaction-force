/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PurchaseHistory_orders = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly internalID: string;
            readonly code: string;
            readonly state: CommerceOrderStateEnum;
            readonly mode: CommerceOrderModeEnum | null;
            readonly buyerTotal: string | null;
            readonly lineItems: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly artwork: {
                            readonly date: string | null;
                            readonly image: {
                                readonly resized: {
                                    readonly url: string | null;
                                } | null;
                            } | null;
                            readonly internalID: string;
                            readonly title: string | null;
                            readonly artist_names: string | null;
                        } | null;
                    } | null;
                } | null> | null;
            } | null;
        } | null;
    } | null> | null;
    readonly " $refType": "PurchaseHistory_orders";
};
export type PurchaseHistory_orders$data = PurchaseHistory_orders;
export type PurchaseHistory_orders$key = {
    readonly " $data"?: PurchaseHistory_orders$data;
    readonly " $fragmentRefs": FragmentRefs<"PurchaseHistory_orders">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PurchaseHistory_orders",
  "type": "CommerceOrderConnectionWithTotalCount",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "CommerceOrderEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "code",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "state",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "mode",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "buyerTotal",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "lineItems",
              "storageKey": null,
              "args": null,
              "concreteType": "CommerceLineItemConnection",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "edges",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "CommerceLineItemEdge",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "node",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "CommerceLineItem",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "artwork",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "Artwork",
                          "plural": false,
                          "selections": [
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "name": "date",
                              "args": null,
                              "storageKey": null
                            },
                            {
                              "kind": "LinkedField",
                              "alias": null,
                              "name": "image",
                              "storageKey": null,
                              "args": null,
                              "concreteType": "Image",
                              "plural": false,
                              "selections": [
                                {
                                  "kind": "LinkedField",
                                  "alias": null,
                                  "name": "resized",
                                  "storageKey": "resized(width:55)",
                                  "args": [
                                    {
                                      "kind": "Literal",
                                      "name": "width",
                                      "value": 55
                                    }
                                  ],
                                  "concreteType": "ResizedImageUrl",
                                  "plural": false,
                                  "selections": [
                                    {
                                      "kind": "ScalarField",
                                      "alias": null,
                                      "name": "url",
                                      "args": null,
                                      "storageKey": null
                                    }
                                  ]
                                }
                              ]
                            },
                            (v0/*: any*/),
                            {
                              "kind": "ScalarField",
                              "alias": null,
                              "name": "title",
                              "args": null,
                              "storageKey": null
                            },
                            {
                              "kind": "ScalarField",
                              "alias": "artist_names",
                              "name": "artistNames",
                              "args": null,
                              "storageKey": null
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '0549518a1b712ae72dcc743e297ffb0f';
export default node;
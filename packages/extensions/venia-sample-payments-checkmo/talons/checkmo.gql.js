import { gql } from '@apollo/client';

export const GET_CHECKMO_CONFIGDATA = gql`
    query storeConfigData {
        storeConfig {
            payment_checkmo_payable_to @client
            payment_checkmo_mailing_address @client
        }
    }
`;

export const SET_PAYMENT_METHOD_ON_CART = gql`
    mutation setPaymentMethodOnCart($cartId: String!) {
        setPaymentMethodOnCart(
            input: { cart_id: $cartId, payment_method: { code: "checkmo" } }
        ) @connection(key: "setPaymentMethodOnCart") {
            cart {
                id
                selected_payment_method {
                    code
                    title
                }
            }
        }
    }
`;

export default {
    getCheckmoConfigQuery: GET_CHECKMO_CONFIGDATA,
    setPaymentMethodOnCartMutation: SET_PAYMENT_METHOD_ON_CART
};

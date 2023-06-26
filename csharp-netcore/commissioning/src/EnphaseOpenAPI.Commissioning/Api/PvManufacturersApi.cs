/*
 * The Enphase Commissioning API
 *
 * Commissioning API can be used to create and update activations on a site, manage companies and users, update Tariff, etc.
 *
 * The version of the OpenAPI document: 4.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using EnphaseOpenAPI.Commissioning.Client;
using EnphaseOpenAPI.Commissioning.Client.Auth;
using EnphaseOpenAPI.Commissioning.Model;

namespace EnphaseOpenAPI.Commissioning.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IPvManufacturersApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Returns PV module manufacturers
        /// </summary>
        /// <remarks>
        /// Returns information about the PV module manufacturers known in Enlighten.
        /// </remarks>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetPvManufacturersResponse</returns>
        GetPvManufacturersResponse GetPvManufacturers(int operationIndex = 0);

        /// <summary>
        /// Returns PV module manufacturers
        /// </summary>
        /// <remarks>
        /// Returns information about the PV module manufacturers known in Enlighten.
        /// </remarks>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetPvManufacturersResponse</returns>
        ApiResponse<GetPvManufacturersResponse> GetPvManufacturersWithHttpInfo(int operationIndex = 0);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IPvManufacturersApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Returns PV module manufacturers
        /// </summary>
        /// <remarks>
        /// Returns information about the PV module manufacturers known in Enlighten.
        /// </remarks>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetPvManufacturersResponse</returns>
        System.Threading.Tasks.Task<GetPvManufacturersResponse> GetPvManufacturersAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Returns PV module manufacturers
        /// </summary>
        /// <remarks>
        /// Returns information about the PV module manufacturers known in Enlighten.
        /// </remarks>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetPvManufacturersResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<GetPvManufacturersResponse>> GetPvManufacturersWithHttpInfoAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IPvManufacturersApi : IPvManufacturersApiSync, IPvManufacturersApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class PvManufacturersApi : IPvManufacturersApi
    {
        private EnphaseOpenAPI.Commissioning.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="PvManufacturersApi"/> class.
        /// </summary>
        /// <returns></returns>
        public PvManufacturersApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="PvManufacturersApi"/> class.
        /// </summary>
        /// <returns></returns>
        public PvManufacturersApi(string basePath)
        {
            this.Configuration = EnphaseOpenAPI.Commissioning.Client.Configuration.MergeConfigurations(
                EnphaseOpenAPI.Commissioning.Client.GlobalConfiguration.Instance,
                new EnphaseOpenAPI.Commissioning.Client.Configuration { BasePath = basePath }
            );
            this.Client = new EnphaseOpenAPI.Commissioning.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new EnphaseOpenAPI.Commissioning.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = EnphaseOpenAPI.Commissioning.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="PvManufacturersApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public PvManufacturersApi(EnphaseOpenAPI.Commissioning.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = EnphaseOpenAPI.Commissioning.Client.Configuration.MergeConfigurations(
                EnphaseOpenAPI.Commissioning.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new EnphaseOpenAPI.Commissioning.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new EnphaseOpenAPI.Commissioning.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = EnphaseOpenAPI.Commissioning.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="PvManufacturersApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public PvManufacturersApi(EnphaseOpenAPI.Commissioning.Client.ISynchronousClient client, EnphaseOpenAPI.Commissioning.Client.IAsynchronousClient asyncClient, EnphaseOpenAPI.Commissioning.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = EnphaseOpenAPI.Commissioning.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public EnphaseOpenAPI.Commissioning.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public EnphaseOpenAPI.Commissioning.Client.ISynchronousClient Client { get; set; }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public string GetBasePath()
        {
            return this.Configuration.BasePath;
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public EnphaseOpenAPI.Commissioning.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public EnphaseOpenAPI.Commissioning.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Returns PV module manufacturers Returns information about the PV module manufacturers known in Enlighten.
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetPvManufacturersResponse</returns>
        public GetPvManufacturersResponse GetPvManufacturers(int operationIndex = 0)
        {
            EnphaseOpenAPI.Commissioning.Client.ApiResponse<GetPvManufacturersResponse> localVarResponse = GetPvManufacturersWithHttpInfo();
            return localVarResponse.Data;
        }

        /// <summary>
        /// Returns PV module manufacturers Returns information about the PV module manufacturers known in Enlighten.
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetPvManufacturersResponse</returns>
        public EnphaseOpenAPI.Commissioning.Client.ApiResponse<GetPvManufacturersResponse> GetPvManufacturersWithHttpInfo(int operationIndex = 0)
        {
            EnphaseOpenAPI.Commissioning.Client.RequestOptions localVarRequestOptions = new EnphaseOpenAPI.Commissioning.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }


            localVarRequestOptions.Operation = "PvManufacturersApi.GetPvManufacturers";
            localVarRequestOptions.OperationIndex = operationIndex;

            // authentication (OAuth2) required
            // oauth required
            if (!localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
                {
                    localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
                }
                else if (!string.IsNullOrEmpty(this.Configuration.OAuthTokenUrl) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientId) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientSecret) &&
                         this.Configuration.OAuthFlow != null)
                {
                    localVarRequestOptions.OAuth = true;
                }
            }
            // authentication (ApiKey) required
            if (!string.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("key")))
            {
                localVarRequestOptions.QueryParameters.Add(EnphaseOpenAPI.Commissioning.Client.ClientUtils.ParameterToMultiMap("", "key", this.Configuration.GetApiKeyWithPrefix("key")));
            }

            // make the HTTP request
            var localVarResponse = this.Client.Get<GetPvManufacturersResponse>("/pv_manufacturers", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetPvManufacturers", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Returns PV module manufacturers Returns information about the PV module manufacturers known in Enlighten.
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetPvManufacturersResponse</returns>
        public async System.Threading.Tasks.Task<GetPvManufacturersResponse> GetPvManufacturersAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            EnphaseOpenAPI.Commissioning.Client.ApiResponse<GetPvManufacturersResponse> localVarResponse = await GetPvManufacturersWithHttpInfoAsync(operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Returns PV module manufacturers Returns information about the PV module manufacturers known in Enlighten.
        /// </summary>
        /// <exception cref="EnphaseOpenAPI.Commissioning.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetPvManufacturersResponse)</returns>
        public async System.Threading.Tasks.Task<EnphaseOpenAPI.Commissioning.Client.ApiResponse<GetPvManufacturersResponse>> GetPvManufacturersWithHttpInfoAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {

            EnphaseOpenAPI.Commissioning.Client.RequestOptions localVarRequestOptions = new EnphaseOpenAPI.Commissioning.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = EnphaseOpenAPI.Commissioning.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }


            localVarRequestOptions.Operation = "PvManufacturersApi.GetPvManufacturers";
            localVarRequestOptions.OperationIndex = operationIndex;

            // authentication (OAuth2) required
            // oauth required
            if (!localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                if (!string.IsNullOrEmpty(this.Configuration.AccessToken))
                {
                    localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
                }
                else if (!string.IsNullOrEmpty(this.Configuration.OAuthTokenUrl) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientId) &&
                         !string.IsNullOrEmpty(this.Configuration.OAuthClientSecret) &&
                         this.Configuration.OAuthFlow != null)
                {
                    localVarRequestOptions.OAuth = true;
                }
            }
            // authentication (ApiKey) required
            if (!string.IsNullOrEmpty(this.Configuration.GetApiKeyWithPrefix("key")))
            {
                localVarRequestOptions.QueryParameters.Add(EnphaseOpenAPI.Commissioning.Client.ClientUtils.ParameterToMultiMap("", "key", this.Configuration.GetApiKeyWithPrefix("key")));
            }

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<GetPvManufacturersResponse>("/pv_manufacturers", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetPvManufacturers", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}

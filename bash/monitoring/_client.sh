#compdef 

# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# !
# ! Note:
# !
# ! THIS SCRIPT HAS BEEN AUTOMATICALLY GENERATED USING
# ! openapi-generator (https://openapi-generator.tech)
# ! FROM OPENAPI SPECIFICATION IN JSON.
# !
# ! Based on: https://github.com/Valodim/zsh-curl-completion/blob/master/_curl
# !
# !
# !
# ! Installation:
# !
# ! Copy the _ file to any directory under FPATH
# ! environment variable (echo $FPATH)
# !
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


local curcontext="$curcontext" state line ret=1
typeset -A opt_args

typeset -A mime_type_abbreviations
# text/*
mime_type_abbreviations[text]="text/plain"
mime_type_abbreviations[html]="text/html"
mime_type_abbreviations[md]="text/x-markdown"
mime_type_abbreviations[csv]="text/csv"
mime_type_abbreviations[css]="text/css"
mime_type_abbreviations[rtf]="text/rtf"
# application/*
mime_type_abbreviations[json]="application/json"
mime_type_abbreviations[xml]="application/xml"
mime_type_abbreviations[yaml]="application/yaml"
mime_type_abbreviations[js]="application/javascript"
mime_type_abbreviations[bin]="application/octet-stream"
mime_type_abbreviations[rdf]="application/rdf+xml"
# image/*
mime_type_abbreviations[jpg]="image/jpeg"
mime_type_abbreviations[png]="image/png"
mime_type_abbreviations[gif]="image/gif"
mime_type_abbreviations[bmp]="image/bmp"
mime_type_abbreviations[tiff]="image/tiff"

#
# Generate zsh completion string list for abbreviated mime types
#
get_mime_type_completions() {
    typeset -a result
    result=()
    for k in "${(@k)mime_type_abbreviations}"; do
        value=$mime_type_abbreviations[${k}]
        #echo $value
        result+=( "${k}[${value}]" )
        #echo $result
    done
    echo "$result"
}

#
# cURL crypto engines completion function
#
_curl_crypto_engine() {
    local vals
    vals=( ${${(f)"$(curl --engine list)":gs/ /}[2,$]} )
    _describe -t outputs 'engines' vals && return 0
}

#
# cURL post data completion functions=
#
_curl_post_data() {

    # don't do anything further if this is raw content
    compset -P '=' && _message 'raw content' && return 0

    # complete filename or stdin for @ syntax
    compset -P '*@' && {
        local expl
        _description files expl stdin
        compadd "$expl[@]" - "-"
        _files
        return 0
    }

    # got a name already? expecting data.
    compset -P '*=' && _message 'data value' && return 0

    # otherwise, name (or @ or =) should be specified
    _message 'data name' && return 0

}


local arg_http arg_ftp arg_other arg_proxy arg_crypto arg_connection arg_auth arg_input arg_output

# HTTP Arguments
arg_http=(''\
  {-0,--http1.0}'[force use of use http 1.0 instead of 1.1]' \
  {-b,--cookie}'[pass data to http server as cookie]:data or file' \
  {-c,--cookie-jar}'[specify cookie file]:file name:_files' \
  {-d,--data}'[send specified data as HTTP POST data]:data:{_curl_post_data}' \
  '--data-binary[post HTTP POST data without any processing]:data:{_curl_post_data}' \
  '--data-urlencode[post HTTP POST data, with url encoding]:data:{_curl_post_data}' \
  {-f,--fail}'[enable failfast behavior for server errors]' \
  '*'{-F,--form}'[add POST form data]:name=content' \
  {-G,--get}'[use HTTP GET even with data (-d, --data, --data-binary)]' \
  '*'{-H,--header}'[specify an extra header]:header' \
  '--ignore-content-length[ignore Content-Length header]' \
  {-i,--include}'[include HTTP header in the output]' \
  {-j,--junk-session-cookies}'[discard all session cookies]' \
  {-e,--referer}'[send url as referer]:referer url:_urls' \
  {-L,--location}'[follow Location headers on http 3XX response]' \
  '--location-trusted[like --location, but allows sending of auth data to redirected hosts]' \
  '--max-redirs[set maximum number of redirection followings allowed]:number' \
  {-J,--remote-header-name}'[use Content-Disposition for output file name]' \
  {-O,--remote-name}'[write to filename parsed from url instead of stdout]' \
  '--post301[do not convert POST to GET after following 301 Location response (follow RFC 2616/10.3.2)]' \
  '--post302[do not convert POST to GET after following 302 Location response (follow RFC 2616/10.3.2)]' \
  )

# FTP arguments
arg_ftp=(\
  {-a,--append}'[append to target file instead of overwriting (FTP/SFTP)]' \
  '--crlf[convert LF to CRLF in upload]' \
  '--disable-eprt[disable use of EPRT and LPRT for active FTP transfers]' \
  '--disable-epsv[disable use of EPSV for passive FTP transfers]' \
  '--ftp-account[account data (FTP)]:data' \
  '--ftp-alternative-to-user[command to send when USER and PASS commands fail (FTP)]:command' \
  '--ftp-create-dirs[create paths remotely if it does not exist]' \
  '--ftp-method[ftp method to use to reach a file (FTP)]:method:(multicwd ocwd singlecwd)' \
  '--ftp-pasv[use passive mode for the data connection (FTP)]' \
  '--ftp-skip-pasv-ip[do not use the ip the server suggests for PASV]' \
  '--form-string[like --form, but do not parse content]:name=string' \
  '--ftp-pret[send PRET before PASV]' \
  '--ftp-ssl-ccc[use clear command channel (CCC) after authentication (FTP)]' \
  '--ftp-ssl-ccc-mode[sets the CCC mode (FTP)]:mode:(active passive)' \
  '--ftp-ssl-control[require SSL/TLS for FTP login, clear for transfer]' \
  {-l,--list-only}'[list names only when listing directories (FTP)]' \
  {-P,--ftp-port}'[use active mode, tell server to connect to specified address or interface (FTP]:address' \
  '*'{-Q,--quote}'[send arbitrary command to the remote server before transfer (FTP/SFTP)]:command' \
  )

# Other Protocol arguments
arg_other=(\
  '--mail-from[specify From: address]:address' \
  '--mail-rcpt[specify email recipient for SMTP, may be given multiple times]:address' \
  {-t,--telnet-option}'[pass options to telnet protocol]:opt=val' \
  '--tftp-blksize[set tftp BLKSIZE option]:value' \
  )

# Proxy arguments
arg_proxy=(\
  '--noproxy[list of hosts to connect directly to instead of through proxy]:no-proxy-list' \
  {-p,--proxytunnel}'[tunnel non-http protocols through http proxy]' \
  {-U,--proxy-user}'[specify the user name and password to use for proxy authentication]:user:password' \
  '--proxy-anyauth[use any authentication method for proxy, default to most secure]' \
  '--proxy-basic[use HTTP Basic authentication for proxy]' \
  '--proxy-digest[use http digest authentication for proxy]' \
  '--proxy-negotiate[enable GSS-Negotiate authentication for proxy]' \
  '--proxy-ntlm[enable ntlm authentication for proxy]' \
  '--proxy1.0[use http 1.0 proxy]:proxy url' \
  {-x,--proxy}'[use specified proxy]:proxy url' \
  '--socks5-gssapi-service[change service name for socks server]:servicename' \
  '--socks5-gssapi-nec[allow unprotected exchange of protection mode negotiation]' \
  )

# Crypto arguments
arg_crypto=(\
  {-1,--tlsv1}'[Forces curl to use TLS version 1 when negotiating with a remote TLS server.]' \
  {-2,--sslv2}'[Forces curl to use SSL version 2 when negotiating with a remote SSL server.]' \
  {-3,--sslv3}'[Forces curl to use SSL version 3 when negotiating with a remote SSL server.]' \
  '--ciphers[specifies which cipher to use for the ssl connection]:list of ciphers' \
  '--crlfile[specify file with revoked certificates]:file' \
  '--delegation[set delegation policy to use with GSS/kerberos]:delegation policy:(none policy always)' \
  {-E,--cert}'[use specified client certificate]:certificate file:_files' \
  '--engine[use selected OpenSSL crypto engine]:ssl crypto engine:{_curl_crypto_engine}' \
  '--egd-file[set ssl entropy gathering daemon socket]:entropy socket:_files' \
  '--cert-type[specify certificate type (PEM, DER, ENG)]:certificate type:(PEM DER ENG)' \
  '--cacert[specify certificate file to verify the peer with]:CA certificate:_files' \
  '--capath[specify a search path for certificate files]:CA certificate directory:_directories' \
  '--hostpubmd5[check remote hosts public key]:md5 hash' \
  {-k,--insecure}'[allow ssl to perform insecure ssl connections (ie, ignore certificate)]' \
  '--key[ssl/ssh private key file name]:key file:_files' \
  '--key-type[ssl/ssh private key file type]:file type:(PEM DER ENG)' \
  '--pubkey[ssh public key file]:pubkey file:_files' \
  '--random-file[set source of random data for ssl]:random source:_files' \
  '--no-sessionid[disable caching of ssl session ids]' \
  '--pass:phrase[passphrase for ssl/ssh private key]' \
  '--ssl[try to use ssl/tls for connection, if available]' \
  '--ssl-reqd[try to use ssl/tls for connection, fail if unavailable]' \
  '--tlsauthtype[set TLS authentication type (only SRP supported!)]:authtype' \
  '--tlsuser[set username for TLS authentication]:user' \
  '--tlspassword[set password for TLS authentication]:password' \
  )

# Connection arguments
arg_connection=(\
  {-4,--ipv4}'[prefer ipv4]' \
  {-6,--ipv6}'[prefer ipv6, if available]' \
  {-B,--use-ascii}'[use ascii mode]' \
  '--compressed[request a compressed transfer]' \
  '--connect-timeout[timeout for connection phase]:seconds' \
  {-I,--head}'[fetch http HEAD only (HTTP/FTP/FILE]' \
  '--interface[work on a specific interface]:name' \
  '--keepalive-time[set time to wait before sending keepalive probes]:seconds' \
  '--limit-rate[specify maximum transfer rate]:speed' \
  '--local-port[set preferred number or range of local ports to use]:num' \
  {-N,--no-buffer}'[disable buffering of the output stream]' \
  '--no-keepalive[disable use of keepalive messages in TCP connections]' \
  '--raw[disable all http decoding and pass raw data]' \
  '--resolve[provide a custom address for a specific host and port pair]:host\:port\:address' \
  '--retry[specify maximum number of retries for transient errors]:num' \
  '--retry-delay[specify delay between retries]:seconds' \
  '--retry-max-time[maximum time to spend on retries]:seconds' \
  '--tcp-nodelay[turn on TCP_NODELAY option]' \
  {-y,--speed-time}'[specify time to abort after if download is slower than speed-limit]:time' \
  {-Y,--speed-limit}'[specify minimum speed for --speed-time]:speed' \
  )

# Authentication arguments
arg_auth=(\
  '--anyauth[use any authentication method, default to most secure]' \
  '--basic[use HTTP Basic authentication]' \
  '--ntlm[enable ntlm authentication]' \
  '--digest[use http digest authentication]' \
  '--krb[use kerberos authentication]:auth:(clear safe confidential private)' \
  '--negotiate[enable GSS-Negotiate authentication]' \
  {-n,--netrc}'[scan ~/.netrc for login data]' \
  '--netrc-optional[like --netrc, but does not make .netrc usage mandatory]' \
  '--netrc-file[like --netrc, but specify file to use]:netrc file:_files' \
  '--tr-encoding[request compressed transfer-encoding]' \
  {-u,--user}'[specify user name and password for server authentication]:user\:password' \
  )

# Input arguments
arg_input=(\
  {-C,--continue-at}'[resume at offset ]:offset' \
  {-g,--globoff}'[do not glob {}\[\] letters]' \
  '--max-filesize[maximum filesize to download, fail for bigger files]:bytes' \
  '--proto[specify allowed protocols for transfer]:protocols' \
  '--proto-redir[specify allowed protocols for transfer after a redirect]:protocols' \
  {-r,--range}'[set range of bytes to request (HTTP/FTP/SFTP/FILE)]:range' \
  {-R,--remote-time}'[use timestamp of remote file for local file]' \
  {-T,--upload-file}'[transfer file to remote url (using PUT for HTTP)]:file to upload:_files' \
  '--url[specify a URL to fetch (multi)]:url:_urls' \
  {-z,--time-cond}'[request downloaded file to be newer than date or given reference file]:date expression' \
  )

# Output arguments
arg_output=(\
  '--create-dirs[create local directory hierarchy as needed]' \
  {-D,--dump-header}'[write protocol headers to file]:dump file:_files' \
  {-o,--output}'[write to specified file instead of stdout]:output file:_files' \
  {--progress-bar,-\#}'[display progress as a simple progress bar]' \
  {-\#,--progress-bar}'[Make curl display progress as a simple progress bar instead of the standard, more informational, meter.]' \
  {-R,--remote-time}'[use timestamp of remote file for local file]' \
  '--raw[disable all http decoding and pass raw data]' \
  {-s,--silent}'[silent mode, do not show progress meter or error messages]' \
  {-S,--show-error}'[show errors in silent mode]' \
  '--stderr[redirect stderr to specified file]:output file:_files' \
  '--trace[enable full trace dump of all incoming and outgoing data]:trace file:_files' \
  '--trace-ascii[enable full trace dump of all incoming and outgoing data, without hex data]:trace file:_files' \
  '--trace-time[prepends a time stamp to each trace or verbose line that curl displays]' \
  {-v,--verbose}'[output debug info]' \
  {-w,--write-out}'[specify message to output on successful operation]:format string' \
  '--xattr[store some file metadata in extended file attributes]' \
  {-X,--request}'[specifies request method for HTTP server]:method:(GET POST PUT DELETE HEAD OPTIONS TRACE CONNECT PATCH LINK UNLINK)' \
  )

_arguments -C -s $arg_http $arg_ftp $arg_other $arg_crypto $arg_connection $arg_auth $arg_input $arg_output \
  {-M,--manual}'[Print manual]' \
  '*'{-K,--config}'[Use other config file to read arguments from]:config file:_files' \
  '--libcurl[output libcurl code for the operation to file]:output file:_files' \
  {-m,--max-time}'[Limit total time of operation]:seconds' \
  {-s,--silent}'[Silent mode, do not show progress meter or error messages]' \
  {-S,--show-error}'[Show errors in silent mode]' \
  '--stderr[Redirect stderr to specified file]:output file:_files' \
  '-q[Do not read settings from .curlrc (must be first option)]' \
  {-h,--help}'[Print help and list of operations]' \
  {-V,--version}'[Print service API version]' \
  '--about[Print the information about service]' \
  '--host[Specify the host URL]':URL:_urls \
  '--dry-run[Print out the cURL command without executing it]' \
  {-ac,--accept}'[Set the Accept header in the request]: :{_values "Accept mime type" $(get_mime_type_completions)}' \
  {-ct,--content-type}'[Set the Content-type header in request]: :{_values "Content mime type" $(get_mime_type_completions)}' \
  '1: :->ops' \
  '*:: :->args' \
  && ret=0


case $state in
  ops)
    # Operations
    _values "Operations" \
            "getSystemAcbDeviceTelemetry[Retrieves telemetry for single ACB]" \
            "getSystemEnchargeDeviceTelemetry[Retrieves telemetry for single Encharge]" \
            "getSystemMicroDeviceTelemetry[Retrieves telemetry for single micro/pcu]"             "getSystemBatteryLifetime[battery_lifetime]" \
            "getSystemBatteryTelemetry[Retrieves telemetry for all batteries for a system]" \
            "getSystemConsumptionLifetime[consumption_lifetime]" \
            "getSystemConsumptionMeterTelemetry[Retrieves telemetry for all consumption meters for a system]" \
            "getSystemEnergyExportLifetime[export_lifetime]" \
            "getSystemEnergyExportTelemetry[Retrieves energy exported to grid in regular intervals]" \
            "getSystemEnergyImportLifetime[import_lifetime]" \
            "getSystemEnergyImportTelemetry[Retrieves energy imported from grid in regular intervals]"             "getSystemEnergyLifetime[energy_lifetime]" \
            "getSystemProductionMeterReadings[production_meter_readings]" \
            "getSystemProductionMeterTelemetry[Retrieves telemetry for all production meters for a system]" \
            "getSystemProductionMicroTelemetry[Retrieves telemetry for all production micros for a system]" \
            "getSystemRgmStats[rgm_stats]"             "streamSystemLiveData[Site Level Live Status]"             "getSystemBatterySettings[Returns the current battery settings of a system]" \
            "getSystemGridStatusSettings[Returns the current grid status of a system.]" \
            "getSystemLoadControlSettings[Returns the current load control settings of a system]" \
            "getSystemStormGuardSettings[Returns the current storm guard settings of a system]" \
            "updateSystemBatterySettings[Updates the current battery settings of a system]" \
            "updateSystemLoadControlSettings[Updates the current load control settings of a system]" \
            "updateSystemStormGuardSettings[Updates the current storm guard settings of a system]"             "getInvertersSummaryByEnvoyOrSite[inverters_summary_by_envoy_or_site]" \
            "getSystem[Retrieves a System by ID]" \
            "getSystemDevices[Retrieves devices for a given system]" \
            "getSystemSummary[Retrieves a system summary]" \
            "getSystems[Fetch systems]" \
            "retrieveSystemId[Retrieve system for a given envoy serial number]" \
            "searchSystems[Search and filter systems]" \

    _arguments "(--help)--help[Print information about operation]"

    ret=0
    ;;
  args)
    case $line[1] in
      getSystemAcbDeviceTelemetry)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
"serial_no=:[PATH] Serial number of the acb."
          "start_at=:[QUERY] Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response."
"granularity=:[QUERY] Granularity of the telemetry data. Default is &#39;day&#39;."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemEnchargeDeviceTelemetry)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
"serial_no=:[PATH] Serial number of the Encharge."
          "start_at=:[QUERY] Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response."
"granularity=:[QUERY] Granularity of the telemetry data. Default is &#39;day&#39;."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemMicroDeviceTelemetry)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
"serial_no=:[PATH] Serial number of the individual solar Microinverter."
          "start_at=:[QUERY] Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response."
"granularity=:[QUERY] Granularity of the telemetry data. Default is &#39;day&#39;."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemBatteryLifetime)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_date=:[QUERY] Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format."
"end_date=:[QUERY] End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemBatteryTelemetry)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_at=:[QUERY] Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response."
"granularity=:[QUERY] Granularity of the telemetry data. Default is &#39;day&#39;."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemConsumptionLifetime)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_date=:[QUERY] Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format."
"end_date=:[QUERY] End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemConsumptionMeterTelemetry)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_at=:[QUERY] Requested start time for telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. If no start_at is specified, defaults to midnight today, in the timezone of the system. If the start_at specified is earlier than the system&#39;s first reported date, then the system first reported date is considered as start_at. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response."
"granularity=:[QUERY] Granularity of the telemetry data. Default is &#39;day&#39;."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemEnergyExportLifetime)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_date=:[QUERY] Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format."
"end_date=:[QUERY] End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemEnergyExportTelemetry)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_at=:[QUERY] Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response."
"granularity=:[QUERY] Granularity of the telemetry data. Default is &#39;day&#39;."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemEnergyImportLifetime)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_date=:[QUERY] Requested start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format."
"end_date=:[QUERY] End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemEnergyImportTelemetry)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_at=:[QUERY] Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response."
"granularity=:[QUERY] Granularity of the telemetry data. Default is &#39;day&#39;."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemEnergyLifetime)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_date=:[QUERY] Start date of the time series data. Defaults to the system&#39;s operational date. If the start_date is earlier than the system&#39;s operational_date, then the response data begins with the system operational_date as start_date. Pass as string in YYYY-MM-DD format."
"end_date=:[QUERY] End date of the time series data. Defaults to yesterday. If the end_date is later than yesterday, then the response data ends with yesterday as end_date. Pass as string in YYYY-MM-DD format."
"production=:[QUERY] When &#39;all&#39;, returns the merged time series plus the time series as reported by the microinverters and the meter on the system. Other values are ignored."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemProductionMeterReadings)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "end_at=:[QUERY] End of reporting period in Unix epoch time. If no end is specified, defaults to the time of the request. If the end is later than the last reported interval the response data ends with the last reported interval."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemProductionMeterTelemetry)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_at=:[QUERY] Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response."
"granularity=:[QUERY] Granularity of the telemetry data. Default is &#39;day&#39;."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemProductionMicroTelemetry)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_at=:[QUERY] Start time for fetching the telemetry data in Epoch time format. Alternatively one can use start_date in place of start_at for passing the start date as string in YYYY-MM-DD format. By default start_at will appear in response. If start_date parameter is passed in the url then start_date field will appear in response."
"granularity=:[QUERY] Granularity of the telemetry data. Default is &#39;day&#39;."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemRgmStats)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
          "start_at=:[QUERY] Start of period to report on in Unix epoch time. If no start is specified, the assumed start is midnight today, in the timezone of the system. If the start is earlier than one year ago, the response includes an empty intervals list. If the start is earlier than the system&#39;s operational_date, the response data begins at midnight of the first reported interval date."
"end_at=:[QUERY] End of reporting period in Unix epoch time. If no end is specified, default to the time of the request or (start time + 1 week), whichever is earlier. If the end is later than the last reported interval the response data ends with the last reported interval."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      streamSystemLiveData)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
                    "duration\::[HEADER] Duration of the stream in seconds. Default&#x3D;30, Min&#x3D;30, Max&#x3D;300, e.g&#x3D;30."
)
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemBatterySettings)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
                    )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemGridStatusSettings)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
                    )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemLoadControlSettings)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
                    )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemStormGuardSettings)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
                    )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      updateSystemBatterySettings)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
                    )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      updateSystemLoadControlSettings)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
                    )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      updateSystemStormGuardSettings)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
                    )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getInvertersSummaryByEnvoyOrSite)
        local -a _op_arguments
        _op_arguments=(
                    "site_id=:[QUERY] Site ID. The response will contain only those microinverters reporting to one of the active envoys of the given site."
"envoy_serial_number=:[QUERY] Active envoy serial number. Only microinverters reporting to the given active envoy will be present in the response."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystem)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
                    )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemDevices)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
                    )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystemSummary)
        local -a _op_arguments
        _op_arguments=(
          "system_id=:[PATH] Unique numeric ID of the system."
                    )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      getSystems)
        local -a _op_arguments
        _op_arguments=(
                    "page=:[QUERY] Page to be returned. Default&#x3D;1, Min&#x3D;1. For example, if page is set to 2, 2nd page is returned."
"size=:[QUERY] Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;100.  For example, if set to 5, 5 records are shown per page."
"sort_by=:[QUERY] Returns list of systems sorted by &lt;sort_by&gt; field. To get ASC order sorted list, user sort_by &#x3D; &lt;key&gt;. To get DESC order sorted list, use sort_by &#x3D; (-)&lt;key&gt;. Current sort keys supported are id, name, and last_report_date. By default the list is sorted by decreasing system ID."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      retrieveSystemId)
        local -a _op_arguments
        _op_arguments=(
                    "serial_num=:[QUERY] Envoy serial number."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
      searchSystems)
        local -a _op_arguments
        _op_arguments=(
                    "page=:[QUERY] Page to be returned. Default&#x3D;1, Min&#x3D;1, e.g&#x3D;2."
"size=:[QUERY] Maximum number of records shown per page. Default&#x3D;10, Min&#x3D;1, Max&#x3D;1000, e.g&#x3D;5."
          )
        _describe -t actions 'operations' _op_arguments -S '' && ret=0
        ;;
    esac
    ;;

esac

return ret
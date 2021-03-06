# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.20.0] - 2017-08-29 [BREAKING]
### Added
- Hapi request object now accessible in middleware functions.

### Changed
- [BREAKING] Middleware function parameters have changed to support the ``request`` object. 
  * The table below shows the middleware functions before (v0.19.2) and after (v0.20.0)

Before | After
--- | --- 
**list**    
post(query, result, Log) |      post(request, result, Log)  
--- | --- 
**find**   
post(query, result, Log)    |      post(request, result, Log)  
--- | --- 
**create** 
pre(payload, Log) | pre(payload, request, Log)
post(document, result, Log) | post(document, request, result, Log)
--- | --- 
**update** 
pre(\_id, payload, Log) | pre(\_id, request, Log)
post(payload, result, Log) | post(request, result, Log)
--- | --- 
**delete** 
pre(\_id, hardDelete, Log) | pre(\_id, hardDelete, request, Log)
post(hardDelete, deleted, Log) | post(hardDelete, deleted, request, Log)



[Unreleased]: https://github.com/jkheadley/rest-hapi/compare/v0.20.0...HEAD
[0.20.0]: https://github.com/jkheadley/rest-hapi/compare/v0.19.2...v0.20.0

[BREAKING]: https://github.com/JKHeadley/rest-hapi/releases

const Blogs = () => {
  return (
    <div className="m-12">
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            Access Token: An access token is a credential used to access
            protected resources on behalf of a user. It is usually a string that
            represents the authorization granted to the client by the resource
            owner. Access tokens are short-lived and have an expiration time.
            They are used to authenticate the client when making requests to the
            server. Refresh Token: A refresh token is a long-lived credential
            used to obtain a new access token after the current access token
            expires. Unlike access tokens, refresh tokens are typically
            long-lived and can be used to get new access tokens without needing
            the user to re-authenticate. Refresh tokens should be kept secure
            since they grant ongoing access to the user's resources. How they
            work together: Initially, the client authenticates with the
            authorization server using the user's credentials (or other means)
            and receives both an access token and a refresh token. The client
            uses the access token to access protected resources on the resource
            server. When the access token expires, instead of prompting the user
            to log in again, the client can use the refresh token to request a
            new access token from the authorization server without requiring the
            user's credentials again. The authorization server verifies the
            refresh token and issues a new access token, allowing the client to
            continue accessing resources. Where to store them on the
            client-side: Access Token: Access tokens should be stored securely
            on the client-side, typically in memory or in a secure storage
            mechanism provided by the platform (e.g., localStorage or
            sessionStorage in a web browser). They should not be accessible to
            malicious scripts or other applications running on the same device.
            Refresh Token: Refresh tokens should be stored securely on the
            client-side as well, but with additional precautions due to their
            long-lived nature. It's best to store refresh tokens in a more
            secure location than access tokens, such as encrypted storage or in
            a secure HTTP-only cookie for web applications. This helps mitigate
            the risk of them being stolen or misused.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus mt-5 bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            SQL databases use a structured tabular data model with a rigid
            schema and SQL query language. They are best for structured data,
            complex queries, and strong consistency. NoSQL databases support
            various data models (key-value, document, etc.) with flexible
            schemas and specialized query languages. They are suitable for
            unstructured or semi-structured data, high scalability, and eventual
            consistency.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus mt-5 bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS
        </div>
        <div className="collapse-content">
          <p>
            Express.js is a minimal and flexible Node.js web application
            framework that provides a robust set of features for building web
            and mobile applications. It's designed to create server-side web
            applications and APIs quickly and easily. Express.js simplifies the
            process of handling HTTP requests, routing, middleware integration,
            and more. Its simplicity and flexibility make it a popular choice
            for building web servers and RESTful APIs in the Node.js ecosystem.
            NestJS, on the other hand, is a progressive Node.js framework for
            building efficient, reliable, and scalable server-side applications.
            It's built with TypeScript and heavily inspired by Angular,
            providing a similar development experience and architectural
            concepts. NestJS uses Express.js under the hood but adds additional
            features and structure to streamline the development process. It
            offers features like dependency injection, modular architecture,
            built-in validation, and support for GraphQL alongside REST APIs.
            NestJS aims to provide developers with a robust and maintainable
            framework for building enterprise-grade applications in the Node.js
            ecosystem.
          </p>
        </div>
        <div className="collapse collapse-plus mt-5 bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What is MongoDB aggregate and how does it work
          </div>
          <div className="collapse-content">
            <p>
              Pipeline Stages: Aggregation operations in MongoDB are composed of
              multiple stages that are executed sequentially. Each stage
              performs a specific operation on the documents that pass through
              it. Data Processing: The aggregation pipeline processes documents
              from a collection in stages. Each stage takes input from the
              previous stage, performs some operation, and passes the results to
              the next stage. Operators: Each stage in the pipeline can use
              various aggregation operators to perform specific operations on
              the data. These operators include $match for filtering documents,
              $group for grouping documents, $project for reshaping documents,
              $sort for sorting documents, and many others. Aggregation
              Expressions: Aggregation expressions allow you to perform
              calculations and transformations on the data within the pipeline.
              These expressions include arithmetic operators, logical operators,
              array operators, string operators, date operators, and more.
              Output: The final stage of the aggregation pipeline typically
              produces the result of the aggregation operation. Depending on the
              stage used, the output can be a single document, a set of
              documents, or a cursor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
